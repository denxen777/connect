import type { RootState } from '../store';

export const usersSelector = (state: RootState) => state.users.users;
export const totalCountSelector = (state: RootState) => state.users.totalCount;
export const currentPageSelector = (state: RootState) =>
  state.users.currentPage;
