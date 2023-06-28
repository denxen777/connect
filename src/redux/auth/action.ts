import type {
  ISetAuthUserData,
  ISetInitialization,
  IAuthorizedUser,
} from './types';

export const SET_AUTH_USER_DATA = 'connect/auth/SET_AUTH_USER_DATA';
export const SET_INITIALIZATION = 'connect/auth/SET_INITIALIZATION';

export const setAuthUserData = (
  payload: IAuthorizedUser
): ISetAuthUserData => ({
  type: SET_AUTH_USER_DATA,
  payload,
});

export const setInitialization = (payload: boolean): ISetInitialization => ({
  type: SET_INITIALIZATION,
  payload,
});
