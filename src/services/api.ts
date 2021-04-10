import axios from "axios";

class Api {
  private endpoint = process.env.REACT_APP_BACKEND_URL;

  async get(endpoint: string, params = {}) {
    return axios({ method: "get", url: `${this.endpoint}/${endpoint}` });
  }

  async post(endpoint: string, data: object) {
    return axios({
      method: "post",
      url: `${this.endpoint}/${endpoint}`,
      data: data,
    });
  }

  async delete(endpoint: string) {
    return axios({
      method: "delete",
      url: `${this.endpoint}/${endpoint}`,
    });
  }
}

export default Api;
