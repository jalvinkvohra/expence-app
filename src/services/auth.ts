import Api from "./api";
import RegisterModel from "../model/Register";

class AuthService {
  private _api: Api;

  constructor() {
    this._api = new Api();
  }

  async register(user: RegisterModel) {
    return await this._api.post("register", user);
  }

  async login(params: any) {
    return true;
  }
}

export default AuthService;
