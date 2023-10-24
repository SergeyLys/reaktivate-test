import { API_URL } from "./env";

export default class ApiGateway {
  static async get<T>(path: string): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${path}`);

      return response.json();
    } catch(e) {
      throw e;
    }
  }

  static async post<T>(path: string, payload: Record<string, any>): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      return response.json();
    } catch(e) {
      throw e;
    }
  }
}
