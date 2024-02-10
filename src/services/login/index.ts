import { connection } from "../config/connection";
import { LOGIN_PATHS_SERVICE } from "./loginPaths";

const { LOGIN } = LOGIN_PATHS_SERVICE;

const API = connection();

export const createLogin = async (body: any): Promise<any> => {
  const response = await API.post(LOGIN, body);
  return response;
};
