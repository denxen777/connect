import { instance } from './instance';

import type { IProfileStatusForm } from '../components/pages/Profile/types';
import type { IProfileEditForm } from '../components/ProfileEditCard/types';
import type { IProfilePhoto, IUserProfile } from '../redux/profile/types';
import type { IData } from '../redux/types';

export const requestUser = (userId: number): Promise<IUserProfile> =>
  instance
    .get<IUserProfile>(`profile/${userId}`)
    .then(response => response.data);

export const requestStatus = (userId: number): Promise<string> =>
  instance
    .get<string>(`profile/status/${userId}`)
    .then(response => response.data);

export const requestPhoto = (file: File): Promise<IData<IProfilePhoto>> => {
  let formData = new FormData();
  formData.append('image', file);

  return instance
    .put<IData<IProfilePhoto>>('profile/photo', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(response => response.data);
};

export const requestSetStatus = (
  data: IProfileStatusForm
): Promise<IData<{}>> =>
  instance
    .put<IData<{}>>('profile/status', data)
    .then(response => response.data);

export const requestUserData = (data: IProfileEditForm): Promise<IData<{}>> =>
  instance.put<IData<{}>>('profile', data).then(response => response.data);
