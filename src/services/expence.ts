import Api from "./api";
import Expence from "../model/Expence";

class ExpenceService {
  private _api: Api;

  constructor() {
    this._api = new Api();
  }

  async addExpence(expence: Expence) {
    this._api.post("expences", expence);
    return true;
  }

  async getExpence() {
    const response = await this._api.get("expences");
    if (response) {
      return response.data.data;
    }
    return [];
  }

  async deleteExpence(expence: Expence) {
    if (!expence.id) {
      return;
    }
    return await this._api.delete(`expences/${expence.id}`);
  }
}

export default ExpenceService;
