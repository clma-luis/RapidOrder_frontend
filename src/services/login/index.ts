import { connection } from "../config/connection";
import { LOGIN_PATHS_SERVICE } from "./loginPaths";

const { LOGIN_PATH } = LOGIN_PATHS_SERVICE;

const API = connection();

export const loginService = async (body: any): Promise<any> => {
  const response = await API.post(LOGIN_PATH, body);
  return response;
};
