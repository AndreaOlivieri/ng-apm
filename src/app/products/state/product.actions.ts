import {Action} from "@ngrx/store"
import {Product} from "../product";

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load product',
  LoadSuccess = '[Product] Load Product successfully',
  LoadError = '[Product] Load Product with errors',
  Update = '[Product] Update product',
  UpdateSuccess = '[Product] Update Product successfully',
  UpdateError = '[Product] Update Product with errors',
  Create = '[Product] Create product',
  CreateSuccess = '[Product] Create Product successfully',
  CreateError = '[Product] Create Product with errors',
  Delete = '[Product] Delete product',
  DeleteSuccess = '[Product] Delete Product successfully',
  DeleteError = '[Product] Delete Product with errors'
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

export class LoadAction implements Action {
  readonly type = ProductActionTypes.Load;
  constructor() {}
}

export class LoadSuccessAction implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: Product[]) {}
}

export class LoadErrorAction implements Action {
  readonly type = ProductActionTypes.LoadError;
  constructor(public payload: string) {}
}

export class UpdateAction implements Action {
  readonly type = ProductActionTypes.Update;
  constructor(public payload: Product) {}
}

export class UpdateSuccessAction implements Action {
  readonly type = ProductActionTypes.UpdateSuccess;
  constructor(public payload: Product) {}
}

export class UpdateErrorAction implements Action {
  readonly type = ProductActionTypes.UpdateError;
  constructor(public payload: string) {}
}

export class CreateAction implements Action {
  readonly type = ProductActionTypes.Create;
  constructor(public payload: Product) {}
}

export class CreateSuccessAction implements Action {
  readonly type = ProductActionTypes.CreateSuccess;
  constructor(public payload: Product) {}
}

export class CreateErrorAction implements Action {
  readonly type = ProductActionTypes.CreateError;
  constructor(public payload: string) {}
}

export class DeleteAction implements Action {
  readonly type = ProductActionTypes.Delete;
  constructor(public payload: Product) {}
}

export class DeleteSuccessAction implements Action {
  readonly type = ProductActionTypes.DeleteSuccess;
  constructor(public payload: Product) {}
}

export class DeleteErrorAction implements Action {
  readonly type = ProductActionTypes.DeleteError;
  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCodeAction
  | SetCurrentProductAction
  | ClearCurrentProductAction
  | InitializeCurrentProductAction
  | LoadAction
  | LoadSuccessAction
  | LoadErrorAction
  | UpdateAction
  | UpdateSuccessAction
  | UpdateErrorAction
  | CreateAction
  | CreateSuccessAction
  | CreateErrorAction
  | DeleteAction
  | DeleteSuccessAction
  | DeleteErrorAction;
