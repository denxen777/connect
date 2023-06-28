import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { profile } from './profile/reducer';
import { users } from './users/reducer';
import { auth } from './auth/reducer';

const reducers = combineReducers({
  profile,
  users,
  auth,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
