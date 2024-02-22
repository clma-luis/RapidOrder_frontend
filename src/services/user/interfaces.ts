export interface UserSchema {
  name: string;
  email: string;
  image: string;
  role: UserRoleType;
  id: String;
}

export enum UserRoleType {
  ADMIN_ROLE = "ADMIN_ROLE",
  CHEF_ROLE = "CHEF_ROLE",
  WAITER_ROLE = "WAITER_ROLE",
}

export interface UserServiceResponse {
  message: String;
  result: UserSchema;
}

//==================================================
//===============CREATE USER SERVICE================
//==================================================

export interface CreateUserServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}

//==================================================
//===============GET USER SERVICE================
//==================================================

export interface GetUserServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}

//==================================================
//=============GET ALL USERS SERVICE================
//==================================================

export interface GetAllUsersServiceResponse {
  message: String;
  result: UserSchema[];
  total: number;
  page: number;
  size: number;
}

export interface GetAllUsersSuccessResult {
  result: UserSchema[];
  total: number;
  page: number;
  size: number;
}

//==================================================
//===============UPDATE USER SERVICE================
//==================================================

export interface UpdateUserBodyService extends Pick<UserSchema, "name" | "image"> {}

export interface UpdateUserServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}

//==================================================
//===============REMOVE USER SERVICE================
//==================================================

export interface RemoveUserServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}

//==================================================
//===========CHANGE USER PASSWORD SERVICE===========
//==================================================

export interface ChangeUserPasswordBodyService {
  password: string;
  newPassword: string;
}

export interface ChangeUserPasswordServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}

//==================================================
//===============CHANGE EMAIL SERVICE===============
//==================================================

export interface ChangeUserEmailBodyService {
  email: string;
  newEmail: string;
}

export interface ChangeEmailServiceSuccessResult extends Omit<UserServiceResponse, "message"> {}
