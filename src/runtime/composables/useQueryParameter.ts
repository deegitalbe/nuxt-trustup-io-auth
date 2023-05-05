import { useRoute } from "nuxt/app";

const useQueryParameter = (key: string, defaultValue?: string) => {
  const route = useRoute();

  if (!route.query) {
    return defaultValue;
  }
  const value = route.query?.[key];

  return value;
};

export { useQueryParameter };
