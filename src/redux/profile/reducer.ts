import { SET_USER, SET_PHOTO, SET_STATUS, SET_USER_DATA } from './actions';

import type { IProfileState, IUserProfile } from './types';
import type { TActionsTypes } from '../types';

const initialState: IProfileState = {
  user: null,
  status: '',
};

export const profile = (state = initialState, action: TActionsTypes) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case SET_PHOTO: {
      return {
        ...state,
        user: { ...(state.user as IUserProfile), photos: action.payload },
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }

    case SET_USER_DATA: {
      return {
        ...state,
        user: { ...(state.user as IUserProfile), ...(action.payload as IUserProfile) },
      };
    }

    default: {
      return state;
    }
  }
};
