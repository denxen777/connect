import {
  addSubscriber,
  addUsers,
  setTotalCount,
  deleteSubscriber,
} from './actions';
import {
  requestSubscribe,
  requestUnsubscribe,
  requestUsers,
} from '../../api/usersService';

import type { TAppThunk } from '../types';

export const getUsers =
  (page: number, pathname: string): TAppThunk =>
  async (dispatch) => {
    const { items, totalCount } = await requestUsers(page, pathname);
    dispatch(addUsers(items));
    dispatch(setTotalCount(totalCount));
  };

export const subscribe =
  (userId: number): TAppThunk =>
  async (dispatch) => {
    const { resultCode } = await requestSubscribe(userId);
    if (resultCode === 0) {
      dispatch(addSubscriber(userId));
    }
  };

export const unsubscribe =
  (userId: number): TAppThunk =>
  async (dispatch) => {
    const { resultCode } = await requestUnsubscribe(userId);
    if (resultCode === 0) {
      dispatch(deleteSubscriber(userId));
    }
  };
