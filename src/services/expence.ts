import Api from "./storage";
import Expence from "../model/Expence";

class ExpenceService {
  async addExpence(expence: Expence) {
    const api = new Api();
    const expences = await this.getExpence();
    expences.push(expence);
    api.addExpence(expences);
    return true;
  }

  async getExpence() {
    const api = new Api();
    const { value } = await api.getExpences();
    return value ? JSON.parse(value) : [];
  }
}

export default ExpenceService;
