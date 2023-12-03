import type { UserAttributes } from "../schemas";

const UserConstructor = (attributes: UserAttributes) => {
  return attributes;
};

export type User = ReturnType<typeof UserConstructor>;

export default UserConstructor;
