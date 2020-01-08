import {initUserState, UserState} from "./user.state";

export const TOGGLE_MASK_USERNAME = 'TOGGLE_MASK_USERNAME';

export function reducer(state: UserState = initUserState, action): UserState {
  switch (action.type) {
    case TOGGLE_MASK_USERNAME:
      return {
        ...state,
        showMaskUsername: action.payload
      };
    default:
      return state;
  }
}
