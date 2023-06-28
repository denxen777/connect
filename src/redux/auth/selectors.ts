import type { RootState } from '../store';

export const authIdSelectors = (state: RootState) => state.auth.user.id;
export const isAuthSelectors = (state: RootState) => state.auth.user.isAuth;
export const isInitializedSelectors = (state: RootState) =>
  state.auth.isInitialized;
