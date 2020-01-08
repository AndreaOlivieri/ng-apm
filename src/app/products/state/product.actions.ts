import {Action} from "@ngrx/store"
import {Product} from "../product";

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
}

export class ToggleProductCodeAction implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}

export class SetCurrentProductAction implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) {}
}

export class ClearCurrentProductAction implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
  constructor() {}
}

export class InitializeCurrentProductAction implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
  constructor() {}
}

export type ProductActions = ToggleProductCodeAction
  | SetCurrentProductAction
  | ClearCurrentProductAction
  | InitializeCurrentProductAction;
