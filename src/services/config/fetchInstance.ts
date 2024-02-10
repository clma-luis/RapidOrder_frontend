import { BASE_URL_API } from "@/shared/config";
import { TOKEN } from "@/shared/constants/defaultConsts";

import { getLocalStorage } from "@/shared/utils/localStorageUtils";

const controllerInstanceAuth = new AbortController();

export const instanceAuthHeaders = () => {
  const token = getLocalStorage(TOKEN);
  const headers = new Headers();

  if (token) {
    headers.append(TOKEN, `${token}`);
  }

  return headers;
};

export type FetchInstance = (url: string, options?: {}) => Promise<any>;

const fetchInstance: FetchInstance = async (url: string, options = {}) => {
  console.log("pasa por el fetch");
  try {
    const response = await fetch(`${BASE_URL_API}${url}`, {
      ...options,
      signal: controllerInstanceAuth.signal,
      headers: instanceAuthHeaders(),
    });

    // Puedes agregar lógica adicional según tus necesidades, como verificar códigos de estado, manejar errores, etc.

    /*  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } */

    return await response.json();
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    throw error;
  }
};

export { fetchInstance };
