import { BASE_URL_API } from "@/shared/config";
import { TOKEN } from "@/shared/constants/defaultConsts";

import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import { HEADERS_APPLICATION_JSON } from "./const";

const controllerInstanceAuth = new AbortController();

export const instanceAuthHeaders = () => {
  const token = getLocalStorage(TOKEN);
  const headers = new Headers();

  if (token) {
    headers.append(TOKEN, `${token}`);
  }

  return headers;
};

const fetchInstance: FetchInstance = async (props: FetchInstanceProps) => {
  const { url, body, headers = HEADERS_APPLICATION_JSON, options } = props;

  try {
    const response = await fetch(`${BASE_URL_API}${url}`, {
      ...options,
      signal: controllerInstanceAuth.signal,
      headers: { ...instanceAuthHeaders(), ...headers },
      body: JSON.stringify(body),
    });

    /*     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } */

    return await response.json();
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    throw error;
  }
};

export { fetchInstance };

export interface FetchInstanceProps {
  url: string;
  body?: any;
  headers?: HeadersInit | undefined;
  options?: any | {};
}

export type FetchInstance = (props: FetchInstanceProps) => Promise<any>;
