import AppState from "../../state/app.state";
import {User} from "../user";
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface UserState {
  showMaskUsername: boolean,
  currentUserId: number,
  users: User[]
};

export const initUserState = {
  showMaskUsername: false,
  currentUserId: null,
  users: [],
};

interface State extends AppState {
  user: UserState
}
export default State;


//Selectors
const userStateSelector = createFeatureSelector<UserState>('user');

export const showMaskUsernameSelector = createSelector(
  userStateSelector,
  state => state.showMaskUsername
);

export const currentUserIdSelector = createSelector(
  userStateSelector,
  state => state.currentUserId
);

export const usersSelector = createSelector(
  userStateSelector,
  state => state.users
);

export const currentUserSelector = createSelector(
  userStateSelector,
  currentUserIdSelector,
  (state, currentUserId) => state.users.find(u => u.id === currentUserId)
);
