import type { RootState } from '../store';

export const userSelector = (state: RootState) => state.profile.user;
export const statusUserSelector = (state: RootState) => state.profile.status;
