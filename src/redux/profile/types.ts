import type { IProfileEditForm } from '../../components/ProfileEditCard/types';
import type { SET_PHOTO, SET_STATUS, SET_USER, SET_USER_DATA } from './actions';

export interface IProfileState {
  user: null | IUserProfile;
  status: string;
}

export interface IUserProfile {
  aboutMe: string;
  contacts: {
    facebook: null | string;
    website: null | boolean;
    vk: null | string;
    twitter: null | string;
    instagram: null | string;
    youtube: null | string;
    github: null | string;
    mainLink: null | string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: IPhotos;
}

export interface IPhotos {
  small: string;
  large: string;
}

export interface IProfilePhoto {
  photos: IPhotos;
}

export interface ISetUser {
  type: typeof SET_USER;
  payload: IUserProfile;
}

export interface ISetPhoto {
  type: typeof SET_PHOTO;
  payload: IPhotos;
}

export interface ISetStatus {
  type: typeof SET_STATUS;
  payload: string;
}

export interface ISetUserData {
  type: typeof SET_USER_DATA;
  payload: IProfileEditForm;
}
