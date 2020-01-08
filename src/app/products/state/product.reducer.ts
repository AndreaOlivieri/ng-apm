import {initProductState, ProductState} from "./product.state";
import {ProductActionTypes, ProductActions} from "./product.actions";

export function reducer(state: ProductState = initProductState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      };
    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };
    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0,
        products: [{
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }].concat(state.products.filter(p => p.id !== 0))
      };
    default:
      return state;
  }
}
