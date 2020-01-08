import {Action} from '@ngrx/store';

export enum UserActionTypes {
  ToggleMaskUsername = '[User] Toggle Mask Username',
}

export class ToggleMaskUsernameAction implements Action {
  readonly type = UserActionTypes.ToggleMaskUsername;
  constructor(public payload: boolean) {}
}

export type UserActions = ToggleMaskUsernameAction;
