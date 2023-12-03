import { UserEndpointConstructor } from "../../endpoints";
import { UserFactoryConstructor } from "../valueObjects";

const UserEndpointFactoryConstructor = () => {
  const create = ({ url, token }: { url: string; token: string }) => {
    const userFactory = UserFactoryConstructor();
    return UserEndpointConstructor({ url, token, userFactory });
  };

  return { create };
};

export type UserEndpointFactory = ReturnType<
  typeof UserEndpointFactoryConstructor
>;
export default UserEndpointFactoryConstructor;
