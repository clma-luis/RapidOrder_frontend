import { connection } from "../config/connection";
import { USER_PATHS_SERVICE } from "./userPaths";

const { CREATE, GET_USERS, GET_USER, UPDATE_USER, REMOVE_USER, CHANGE_PASSWORD, CHANGE_EMAIL } = USER_PATHS_SERVICE;

const API = connection();

export const createUser = async (body: any): Promise<any> => {
  const response = await API.get(CREATE, body);

  return response;
};

export const getAllUsers = async (): Promise<any> => {
  const response = await API.get(GET_USERS);

  return response;
};

export const getUser = async (id: string): Promise<any> => {
  const response = await API.get(GET_USER.replace(":id", id));

  return response;
};

export const updateUser = async (body: any): Promise<any> => {
  const response = await API.put(UPDATE_USER, body);
  return response;
};

export const removeUser = async (id: string): Promise<any> => {
  const response = await API.delete(REMOVE_USER.replace(":id", id));
  return response;
};

export const changeUserPassword = async (body: { password: string; newPassword: string }): Promise<any> => {
  const response = await API.put(CHANGE_PASSWORD, body);
  return response;
};
