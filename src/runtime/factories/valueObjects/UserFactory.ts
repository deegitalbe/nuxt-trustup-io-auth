import type { UserAttributes } from "../../schemas";
import { UserConstructor } from "../../valueObjects";

const UserFactoryConstructor = () => {
  const create = (attributes: UserAttributes) => {
    return UserConstructor(attributes);
  };

  return {
    create,
  };
};

export type UserFactory = ReturnType<typeof UserFactoryConstructor>;
export default UserFactoryConstructor;
