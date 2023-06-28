import type { Dispatch, SetStateAction } from 'react';
import type { IUserProfile } from '../../redux/profile/types';

export interface IProfileEditCard {
  user: IUserProfile;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  updateUserData: (userData: IProfileEditForm) => void;
}

export interface IProfileEditForm {
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean | string;
  lookingForAJobDescription: string;
  contacts: {
    github: string | null;
    vk: string | null;
  };
}
