import type { IProfileEditForm } from '../../components/ProfileEditCard/types';
import type {
  IPhotos,
  ISetPhoto,
  ISetStatus,
  ISetUser,
  ISetUserData,
  IUserProfile
} from './types';

export const SET_USER = 'connect/profile/SET_USER';
export const SET_PHOTO = 'connect/profile/SET_PHOTO';
export const SET_STATUS = 'connect/profile/SET_STATUS';
export const SET_USER_DATA = 'connect/profile/SET_USER_DATA';

export const setUser = (payload: IUserProfile): ISetUser => ({
  type: SET_USER,
  payload,
});

export const setPhoto = (payload: IPhotos): ISetPhoto => ({
  type: SET_PHOTO,
  payload,
});

export const setStatus = (payload: string): ISetStatus => ({
  type: SET_STATUS,
  payload,
});

export const setUserData = (payload: IProfileEditForm): ISetUserData => ({
  type: SET_USER_DATA,
  payload,
});
