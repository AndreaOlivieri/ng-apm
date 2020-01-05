export const TOGGLE_PRODUCT_CODE = 'TOGGLE_PRODUCT_CODE';

export function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_PRODUCT_CODE:
      return {
        ...state,
        showProductCode: action.payload
      };
    default:
      return state;
  }
}
