import {initUserState, UserState} from "./user.state";
import {UserActions, UserActionTypes} from "./user.actions";

export function reducer(state: UserState = initUserState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.ToggleMaskUsername:
      return {
        ...state,
        showMaskUsername: action.payload
      };
    default:
      return state;
  }
}
