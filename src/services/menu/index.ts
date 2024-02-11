import { connection } from "../config/connection";
import { MENU_PATHS_SERVICE } from "./menuPaths";

const { CREATE_PATH, GET_MENUS_PATH, GET_MENU_PATH, UPDATE_MENU_PATH, REMOVE_MENU_PATH, CHANGE_STATUS_PATH } = MENU_PATHS_SERVICE;

const API = connection();

export const createMenuService = async (body: any): Promise<any> => {
  const response = await API.get(CREATE_PATH, body);
  return response;
};

export const getAllMenusService = async (): Promise<any> => {
  const response = await API.get(GET_MENUS_PATH);
  return response;
};

export const getMenuService = async (id: string): Promise<any> => {
  const response = await API.get(GET_MENU_PATH.replace(":id", id));
  return response;
};

export const updateMenuService = async (id: string, body: any): Promise<any> => {
  const response = await API.put(UPDATE_MENU_PATH.replace(":id", id), body);
  return response;
};

export const removeMenuService = async (id: string): Promise<any> => {
  const response = await API.delete(REMOVE_MENU_PATH.replace(":id", id));
  return response;
};

export const changeMenuStatusService = async (id: string, body: any): Promise<any> => {
  const response = await API.put(CHANGE_STATUS_PATH.replace(":id", id), body);
  return response;
};
