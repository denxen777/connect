import { instance } from './instance';

import type { IData } from '../redux/types';
import type { IAuthorizationForm } from '../components/pages/Authorization/types';
import type { IAuthorizedUser, ILogin } from '../redux/auth/types';

export const requestAuthUserData = (): Promise<IData<IAuthorizedUser>> =>
  instance
    .get<IData<IAuthorizedUser>>('auth/me')
    .then(response => response.data);

export const requestLogin = (
  data: IAuthorizationForm
): Promise<IData<ILogin>> =>
  instance
    .post<IData<ILogin>>('/auth/login', data)
    .then(response => response.data);

export const requestLogout = (): Promise<IData<{}>> =>
  instance.delete<IData<{}>>('/auth/login').then(response => response.data);
