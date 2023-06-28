import type {
  IAddUsers,
  ISetCurrentPage,
  ISetTotalCount,
  IAddSubscriber,
  IDeleteSubscriber,
  IUser,
} from './types';

export const ADD_USERS = 'connect/users/ADD_USERS';
export const SET_TOTAL_COUNT = 'connect/users/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE = 'connect/users/SET_CURRENT_PAGE';
export const ADD_SUBSCRIBER = 'connect/users/ADD_SUBSCRIBER';
export const DELETE_SUBSCRIBER = 'connect/users/DELETE_SUBSCRIBER';

export const addUsers = (payload: IUser[]): IAddUsers => ({
  type: ADD_USERS,
  payload,
});

export const setTotalCount = (payload: number): ISetTotalCount => ({
  type: SET_TOTAL_COUNT,
  payload,
});

export const setCurrentPage = (payload: number): ISetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const addSubscriber = (payload: number): IAddSubscriber => ({
  type: ADD_SUBSCRIBER,
  payload,
});

export const deleteSubscriber = (payload: number): IDeleteSubscriber => ({
  type: DELETE_SUBSCRIBER,
  payload,
});
