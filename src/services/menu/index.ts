import { connection } from "../config/connection";
import { MENU_PATHS_SERVICE } from "./menuPaths";

const { CREATE, GET_MENUS, GET_MENU, UPDATE_MENU, REMOVE_MENU, CHANGE_STATUS } = MENU_PATHS_SERVICE;

const API = connection();

export const createMenu = async (body: any): Promise<any> => {
  const response = await API.get(CREATE, body);
  return response;
};

export const getAllMenus = async (): Promise<any> => {
  const response = await API.get(GET_MENUS);
  return response;
};

export const getMenu = async (id: string): Promise<any> => {
  const response = await API.get(GET_MENU.replace(":id", id));
  return response;
};

export const updateMenu = async (id: string, body: any): Promise<any> => {
  const response = await API.put(UPDATE_MENU.replace(":id", id), body);
  return response;
};

export const removeMenu = async (id: string): Promise<any> => {
  const response = await API.delete(REMOVE_MENU.replace(":id", id));
  return response;
};

export const changeMenuStatus = async (id: string, body: any): Promise<any> => {
  const response = await API.put(CHANGE_STATUS.replace(":id", id), body);
  return response;
};
