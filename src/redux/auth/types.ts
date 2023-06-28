import type { SET_AUTH_USER_DATA, SET_INITIALIZATION } from './action';

export interface IAuthState {
  user: IAuthorizedUser;
  isInitialized: boolean;
}

export interface IAuthorizedUser {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
}

export interface ILogin {
  userId: number;
}

export interface ISetAuthUserData {
  type: typeof SET_AUTH_USER_DATA;
  payload: IAuthorizedUser;
}

export interface ISetInitialization {
  type: typeof SET_INITIALIZATION;
  payload: boolean;
}
