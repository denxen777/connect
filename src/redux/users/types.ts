import type {
  ADD_USERS,
  SET_TOTAL_COUNT,
  SET_CURRENT_PAGE,
  ADD_SUBSCRIBER,
  DELETE_SUBSCRIBER,
} from './actions';
import type { IPhotos } from '../profile/types';

export interface IUsersState {
  users: null | IUser[];
  totalCount: number;
  currentPage: number;
}

export interface IUser {
  id: number;
  name: string;
  uniqueUrlName: null;
  photos: IPhotos;
  status: null | string;
  followed: boolean;
}

export interface IAddUsers {
  type: typeof ADD_USERS;
  payload: IUser[];
}

export interface ISetTotalCount {
  type: typeof SET_TOTAL_COUNT;
  payload: number;
}

export interface ISetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export interface IAddSubscriber {
  type: typeof ADD_SUBSCRIBER;
  payload: number;
}

export interface IDeleteSubscriber {
  type: typeof DELETE_SUBSCRIBER;
  payload: number;
}
