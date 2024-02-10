import { FetchInstance, fetchInstance } from "./fetchInstance";

export const connection = (instanceFetch: FetchInstance = fetchInstance) => {
  return {
    get: async (url: string, options = {}) => {
      const response = await instanceFetch(url, { ...options, method: "GET" });

      return response;
    },

    post: async (url: string, data: any, options = {}) => {
      const response = await instanceFetch(url, { ...options, method: "POST", body: JSON.stringify(data) });

      return response;
    },

    put: async (url: string, data: any, options = {}) => {
      const response = await instanceFetch(url, { ...options, method: "PUT", body: JSON.stringify(data) });

      return await response;
    },

    delete: async (url: string, options = {}) => {
      const response = await instanceFetch(url, { ...options, method: "DELETE" });
      return response;
    },
  };
};
