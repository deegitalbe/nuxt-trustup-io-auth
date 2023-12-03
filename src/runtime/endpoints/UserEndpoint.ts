import { z } from "zod";
import type { UserFactory } from "../factories";
import { userSchema } from "../schemas";

const responseSchema = z.object({
  user: userSchema,
});

const UserEndpointConstructor = ({
  url,
  token,
  userFactory,
}: {
  url: string;
  token: string;
  userFactory: UserFactory;
}) => {
  const retrieve = async () => {
    const headers = {
      Authorization: token,
      Accept: "application/json",
    };
    const response = await fetch(`${url}/api/user`, { headers });
    if (!response.ok) return;
    const body = await response.json();
    const parsing = responseSchema.safeParse(body);
    if (!parsing.success) {
      console.error("User could not be parsed", parsing.error);
      return;
    }

    const {
      data: { user },
    } = parsing;
    return userFactory.create(user);
  };

  return { retrieve };
};

export type UserEndpoint = ReturnType<typeof UserEndpointConstructor>;
export default UserEndpointConstructor;
