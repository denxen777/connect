import {
  requestPhoto,
  requestSetStatus,
  requestStatus,
  requestUser,
  requestUserData,
} from '../../api/profileService';
import { setPhoto, setStatus, setUser, setUserData } from './actions';

import type { TAppThunk } from '../types';
import type { IProfileStatusForm } from '../../components/pages/Profile/types';
import type { IProfileEditForm } from '../../components/ProfileEditCard/types';

export const getUser =
  (userId: number): TAppThunk =>
  async (dispatch) => {
    const data = await requestUser(userId);
    dispatch(setUser(data));
  };

export const getStatus =
  (userId: number): TAppThunk =>
  async (dispatch) => {
    const data = await requestStatus(userId);
    dispatch(setStatus(data));
  };

export const updatePhoto =
  (file: File): TAppThunk =>
  async (dispatch) => {
    const { data } = await requestPhoto(file);
    dispatch(setPhoto(data.photos));
  };

export const updateStatus =
  (data: IProfileStatusForm): TAppThunk =>
  async (dispatch) => {
    const { resultCode } = await requestSetStatus(data);
    if (resultCode === 0) {
      dispatch(setStatus(data.status));
    }
  };

export const updateUserData =
  (userData: IProfileEditForm): TAppThunk =>
  async (dispatch) => {
    const { resultCode } = await requestUserData(userData);
    if (resultCode === 0) {
      dispatch(setUserData(userData));
    }
  };
