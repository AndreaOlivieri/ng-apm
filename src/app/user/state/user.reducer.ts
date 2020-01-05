export const TOGGLE_MASK_USERNAME = 'TOGGLE_MASK_USERNAME';

export function reducer(state, action) {
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
