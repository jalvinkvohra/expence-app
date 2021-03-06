import { Plugins } from "@capacitor/core";
import Expence from "../model/Expence";
const { Storage } = Plugins;

class StorageService {
  async addExpence(expences: Expence[]) {
    return Storage.set({ key: "expences", value: JSON.stringify(expences) });
  }

  async getExpences() {
    return Storage.get({ key: "expences" });
  }
}

export default StorageService;
