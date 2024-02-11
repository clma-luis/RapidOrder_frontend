import { connection } from "../config/connection";
import { ORDER_PATHS_SERVICE } from "./orderPaths";

const { CREATE_PATH, GET_ORDERS_BY_USER_ID_PATH, UPDATE_ORDER_STATUS_PATH, UPDATE_ORDER_PATH } = ORDER_PATHS_SERVICE;

const API = connection();

export const createOrderService = async (body: any): Promise<any> => {
  const response = await API.post(CREATE_PATH, body);
  return response;
};

export const updateOrderStatusService = async (id: string, body: any): Promise<any> => {
  const response = await API.put(UPDATE_ORDER_STATUS_PATH.replace(":id", id), body);
};
