import { connection } from "../config/connection";
import {
  ChangeEmailServiceSuccessResult,
  ChangeUserEmailBodyService,
  ChangeUserPasswordBodyService,
  ChangeUserPasswordServiceSuccessResult,
  CreateUserServiceSuccessResult,
  GetAllUsersSuccessResult,
  GetUserServiceSuccessResult,
  RemoveUserServiceSuccessResult,
  UpdateUserBodyService,
  UpdateUserServiceSuccessResult,
} from "./interfaces";
import { USER_PATHS_SERVICE } from "./userPaths";

const { CREATE_PATH, GET_USERS_PATH, GET_USER_PATH, UPDATE_USER_PATH, REMOVE_USER_PATH, CHANGE_PASSWORD_PATH, CHANGE_EMAIL_PATH } =
  USER_PATHS_SERVICE;

const API = connection();

export const createUserService = async (body: any): Promise<CreateUserServiceSuccessResult> => {
  const { message, ...data } = await API.get(CREATE_PATH, body);

  return data;
};

export const getAllUsersService = async (page: string, limit: string): Promise<GetAllUsersSuccessResult> => {
  const currentPage = !page ? "1" : page;
  const currentLimit = !limit ? "10" : limit;
  const GET_ALL_USERS_PATH = GET_USERS_PATH.replace(":page", currentPage).replace(":limit", currentLimit);
  const { message, ...data } = await API.get(GET_ALL_USERS_PATH);

  return data;
};

export const getUserService = async (id: string): Promise<GetUserServiceSuccessResult> => {
  const { message, ...data } = await API.get(GET_USER_PATH.replace(":id", id));

  return data;
};

export const updateUserService = async (body: UpdateUserBodyService): Promise<UpdateUserServiceSuccessResult> => {
  const { message, ...response } = await API.put(UPDATE_USER_PATH, body);
  return response;
};

export const removeUserService = async (id: string): Promise<RemoveUserServiceSuccessResult> => {
  const { message, ...data } = await API.delete(REMOVE_USER_PATH.replace(":id", id));
  return data;
};

export const changeUserPasswordService = async (body: ChangeUserPasswordBodyService): Promise<ChangeUserPasswordServiceSuccessResult> => {
  const { message, ...data } = await API.put(CHANGE_PASSWORD_PATH, body);
  return data;
};

export const changeUserEmailService = async (body: ChangeUserEmailBodyService): Promise<ChangeEmailServiceSuccessResult> => {
  const { message, ...data } = await API.put(CHANGE_EMAIL_PATH, body);
  return data;
};
