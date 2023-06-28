import { instance } from './instance';

import type { IUsersData } from '../redux/types';
import type { IData } from '../redux/types';

export const requestUsers = (
  page: number,
  pathname: string
): Promise<IUsersData> => {
  if (pathname === '/users') {
    return instance
      .get<IUsersData>(`users?count=8&page=${page}`)
      .then(response => response.data);
  }
  return instance
    .get<IUsersData>(`users?friend=true&count=8&page=${page}`)
    .then(response => response.data);
};

export const requestSubscribe = (userId: number): Promise<IData<{}>> =>
  instance.post<IData<{}>>(`/follow/${userId}`).then(response => response.data);

export const requestUnsubscribe = (userId: number): Promise<IData<{}>> =>
  instance
    .delete<IData<{}>>(`/follow/${userId}`)
    .then(response => response.data);
