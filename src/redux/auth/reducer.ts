import { SET_AUTH_USER_DATA, SET_INITIALIZATION } from './action';

import type { TActionsTypes } from '../types';
import type { IAuthState } from './types';

const initialState: IAuthState = {
  user: {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
  },
  isInitialized: false,
};

export const auth = (state = initialState, action: TActionsTypes) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        user: { ...action.payload },
      };
    }

    case SET_INITIALIZATION: {
      return {
        ...state,
        isInitialized: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
