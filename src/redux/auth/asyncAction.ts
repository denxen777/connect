import {
  requestLogin,
  requestAuthUserData,
  requestLogout,
} from '../../api/authService';
import { setAuthUserData, setInitialization } from './action';

import type { IAuthorizationForm } from '../../components/pages/Authorization/types';
import type { TAppThunk } from '../types';

export const getAuthUserData = (): TAppThunk => async dispatch => {
  const { data, resultCode } = await requestAuthUserData();
  if (resultCode === 0) {
    dispatch(setAuthUserData({ ...data, isAuth: true }));
  }
  dispatch(setInitialization(true));
};

export const login =
  (data: IAuthorizationForm): TAppThunk =>
  async dispatch => {
    const { resultCode } = await requestLogin(data);
    if (resultCode === 0) {
      dispatch(getAuthUserData());
    }
  };

export const logout = (): TAppThunk => async dispatch => {
  const { resultCode } = await requestLogout();

  if (resultCode === 0) {
    dispatch(setAuthUserData({ id: 0, login: '', email: '', isAuth: false }));
  }
};
