import { connection } from "../config/connection";
import { USER_PATHS_SERVICE } from "./userPaths";

const { CREATE_PATH, GET_USERS_PATH, GET_USER_PATH, UPDATE_USER_PATH, REMOVE_USER_PATH, CHANGE_PASSWORD_PATH, CHANGE_EMAIL_PATH } =
  USER_PATHS_SERVICE;

const API = connection();

export const createUserService = async (body: any): Promise<any> => {
  const response = await API.get(CREATE_PATH, body);

  return response;
};

export const getAllUsersService = async (): Promise<any> => {
  const response = await API.get(GET_USERS_PATH);

  return response;
};

export const getUserService = async (id: string): Promise<any> => {
  const response = await API.get(GET_USER_PATH.replace(":id", id));

  return response;
};

export const updateUserService = async (body: any): Promise<any> => {
  const response = await API.put(UPDATE_USER_PATH, body);
  return response;
};

export const removeUserService = async (id: string): Promise<any> => {
  const response = await API.delete(REMOVE_USER_PATH.replace(":id", id));
  return response;
};

export const changeUserPasswordService = async (body: { password: string; newPassword: string }): Promise<any> => {
  const response = await API.put(CHANGE_PASSWORD_PATH, body);
  return response;
};
