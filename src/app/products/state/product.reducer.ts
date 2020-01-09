import {initProductState, ProductState} from "./product.state";
import {ProductActionTypes, ProductActions} from "./product.actions";
import {newProduct, Product} from "../product";

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
        currentProductId: 0
      };
    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      };
    case ProductActionTypes.UpdateSuccess:
      return {
        ...state,
        currentProductId: action.payload.id,
        products: state.products.map(p => p.id === action.payload.id ? action.payload : p),
        error: ''
      };
    case ProductActionTypes.CreateSuccess:
      return {
        ...state,
        currentProductId: action.payload.id,
        products: [...state.products, action.payload],
        error: ''
      };
    case ProductActionTypes.LoadError:
    case ProductActionTypes.UpdateError:
    case ProductActionTypes.CreateError:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;
  }
}
