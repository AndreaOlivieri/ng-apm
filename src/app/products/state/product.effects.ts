import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {ProductService} from "../product.service";
import {
  CreateAction, CreateErrorAction, CreateSuccessAction, DeleteAction, DeleteErrorAction, DeleteSuccessAction,
  LoadAction,
  LoadErrorAction,
  LoadSuccessAction,
  ProductActionTypes,
  UpdateAction, UpdateErrorAction,
  UpdateSuccessAction
} from "./product.actions";
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.Load),
    mergeMap((action: LoadAction) => {
      return this.productService.getProducts().pipe(
        map((products: Product[]) => {
          return new LoadSuccessAction(products);
        }),
        catchError(err => of(new LoadErrorAction(err)))
      );
    })
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.Update),
    mergeMap((action: UpdateAction) => {
      return this.productService.updateProduct(action.payload).pipe(
        map((product: Product) => {
          return new UpdateSuccessAction(product);
        }),
        catchError(err => of(new UpdateErrorAction(err)))
      );
    })
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.Create),
    mergeMap((action: CreateAction) => {
      return this.productService.createProduct(action.payload).pipe(
        map((product: Product) => {
          return new CreateSuccessAction(product);
        }),
        catchError(err => of(new CreateErrorAction(err)))
      );
    })
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.Delete),
    mergeMap((action: DeleteAction) => {
      return this.productService.deleteProduct(action.payload).pipe(
        map((product: Product) => {
          return new DeleteSuccessAction(product);
        }),
        catchError(err => of(new DeleteErrorAction(err)))
      );
    })
  );
}
