import {Product} from "../product";
import AppState from "../../state/app.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
  showProductCode: boolean,
  currentProductId: number,
  products: Product[]
}

export const initProductState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: []
};

interface State extends AppState {
  products: ProductState
}
export default State;


// SELECTORS
const productStateSelector = createFeatureSelector<ProductState>('products');

export const showProductCodeSelector = createSelector(
  productStateSelector,
  state => state.showProductCode
);

export const productsSelector = createSelector(
  productStateSelector,
  state => state.products
);

export const currentProductIdSelector = createSelector(
  productStateSelector,
  state => state.currentProductId
);

export const currentProductSelector = createSelector(
  productStateSelector,
  currentProductIdSelector,
  (state, currentProductId) => state.products.find(p => p.id === currentProductId)
);
