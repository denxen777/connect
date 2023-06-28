import type { IUser } from '../redux/users/types';

export const updateUsersArray = (
  users: IUser[],
  userId: number,
  value: boolean
): IUser[] =>
  users.map(user => {
    if (user.id === userId) {
      user.followed = value;
      return user;
    }
    return user;
  });
