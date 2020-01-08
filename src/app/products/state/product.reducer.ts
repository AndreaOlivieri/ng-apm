import {initProductState, ProductState} from "./product.state";

export const TOGGLE_PRODUCT_CODE = 'TOGGLE_PRODUCT_CODE';

export function reducer(state: ProductState = initProductState, action): ProductState {
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
