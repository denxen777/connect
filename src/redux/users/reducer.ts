import {
  ADD_SUBSCRIBER,
  ADD_USERS,
  DELETE_SUBSCRIBER,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
} from './actions';
import { updateUsersArray } from '../../utils/updateUsersArray';

import type { TActionsTypes } from '../types';
import type { IUser, IUsersState } from './types';

const initialState: IUsersState = {
  users: null,
  totalCount: 0,
  currentPage: 1,
};

export const users = (state = initialState, action: TActionsTypes) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.payload,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case ADD_SUBSCRIBER: {
      return {
        ...state,
        users: updateUsersArray(state.users as IUser[], action.payload, true),
      };
    }

    case DELETE_SUBSCRIBER: {
      return {
        ...state,
        users: updateUsersArray(state.users as IUser[], action.payload, false),
      };
    }

    default: {
      return state;
    }
  }
};
