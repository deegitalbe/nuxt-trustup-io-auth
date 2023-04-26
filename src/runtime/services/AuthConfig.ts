import { AuthLogic } from "@deegital/vue-trustup-io-auth";
import { AuthConstructorOptions } from "@deegital/vue-trustup-io-auth/dist/lib/types";

class AuthConfig {
  private _auth?: AuthLogic;

  public get auth() {
    return this._auth;
  }

  public create(options: AuthConstructorOptions) {
    this._auth = new AuthLogic(options);
    return this;
  }
}
export default AuthConfig;
