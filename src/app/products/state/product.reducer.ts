import {initProductState, ProductState} from "./product.state";
import {ProductActionTypes, ProductActions} from "./product.actions";
import {Product} from "../product";

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
        currentProductId: action.payload.id,
        products: upsertProductById(action.payload, state.products)
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
        products: upsertProductById({
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }, state.products)
      };
    default:
      return state;
  }
}

function upsertProductById(newProduct: Product, products: Product[] = []) {
  return [newProduct].concat(products.filter(p => p.id !== newProduct.id));
}
