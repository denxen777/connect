import type { ThunkAction } from 'redux-thunk';
import type { RootState } from './store';
import type {
  ISetPhoto,
  ISetStatus,
  ISetUser,
  ISetUserData,
} from './profile/types';
import type {
  IAddUsers,
  ISetTotalCount,
  ISetCurrentPage,
  IAddSubscriber,
  IDeleteSubscriber,
  IUser,
} from './users/types';
import type { ISetAuthUserData, ISetInitialization } from './auth/types';

export type TActionsTypes =
  | ISetUser
  | ISetPhoto
  | ISetStatus
  | ISetUserData
  | ISetTotalCount
  | ISetCurrentPage
  | IAddUsers
  | IAddSubscriber
  | IDeleteSubscriber
  | ISetAuthUserData
  | ISetInitialization;

export type TAppThunk = ThunkAction<void, RootState, unknown, TActionsTypes>;

export interface IData<T> {
  data: T;
  messages: String[];
  resultCode: number;
}

export interface IUsersData {
  items: IUser[];
  totalCount: number;
  error: null | string;
}
