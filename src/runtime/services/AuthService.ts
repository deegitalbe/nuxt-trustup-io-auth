import type { User } from "../valueObjects";
import type { LocalStorageProvider } from "../providers";
import type { UserEndpointFactory } from "../factories";
import { callbackQuerySchema } from "../schemas";
import { computed, ref } from "#imports";
import { type RouteLocationNormalized } from "#vue-router";

export type Redirect = { path: string; external: boolean };

export type PotentialRedirect =
  | { success: true; redirect?: undefined }
  | { success: false; redirect: Redirect };

const AuthServiceConstructor = ({
  userEndpointFactory,
  tokenProvider,
  authUrl,
  accessRoles,
}: {
  userEndpointFactory: UserEndpointFactory;
  tokenProvider: LocalStorageProvider;
  authUrl: string;
  accessRoles: string[];
}) => {
  const isLoading = ref(true);
  const user = ref<User>();
  const hasAccess = ref(false);
  const isAuthenticated = computed<boolean>(
    () => !!user.value && !isLoading.value && hasAccess.value,
  );

  const check = async (): Promise<PotentialRedirect> => {
    const isSuccessful = await authenticate();
    if (isSuccessful) return { success: true };
    if (user.value)
      return {
        success: false,
        redirect: {
          external: true,
          path: `${authUrl}/errors/invalid-role`,
        },
      };
    const url = location.href;
    return {
      success: false,
      redirect: {
        external: true,
        path: `${authUrl}?callback=${url}`,
      },
    };
  };

  const setToken = (to: RouteLocationNormalized): Redirect => {
    const { query } = to;
    const safeQuery = callbackQuerySchema.safeParse(query);
    const { success } = safeQuery;

    if (!success)
      return {
        path: "/",
        external: false,
      };

    const {
      data: {
        token,
        "amp;path": wronglyEncodedPath,
        path: correctlyEncodedPath,
      },
    } = safeQuery;

    tokenProvider.set(token);
    const parsedPath = correctlyEncodedPath || wronglyEncodedPath || "/";
    const isExternal = parsedPath.startsWith("http");
    const isAbsolutePath = parsedPath.startsWith("/");
    const isRelativePath = !isAbsolutePath && !isExternal;
    const path = isRelativePath ? `/${parsedPath}` : parsedPath;

    return {
      path,
      external: isExternal,
    };
  };

  const logout = (): void => {
    user.value = undefined;
    tokenProvider.set(null);

    window.location.replace(`${authUrl}/logout`);
  };

  const authenticate = async () => {
    if (user.value) return true;

    const token = tokenProvider.get();
    if (!token) return;

    const userEndpoint = userEndpointFactory.create({
      url: authUrl,
      token,
    });
    isLoading.value = true;
    const model = await userEndpoint.retrieve();
    isLoading.value = false;
    if (!model) {
      tokenProvider.set(null);
      return;
    }
    user.value = model;

    const accessGranted = checkUserAccess(model);
    hasAccess.value = accessGranted;
    return accessGranted;
  };

  const checkUserAccess = (user: User): boolean => {
    const mapping = accessRoles.reduce<Record<string, true>>(
      (mapping, role) => {
        mapping[role] = true;
        return mapping;
      },
      {},
    );

    const roleGrantingAccess = user.roles.find((role) => mapping[role]);

    return !!roleGrantingAccess;
  };

  return {
    isLoading,
    user,
    isAuthenticated,
    check,
    setToken,
    logout,
  };
};

export type AuthService = ReturnType<typeof AuthServiceConstructor>;
export default AuthServiceConstructor;
