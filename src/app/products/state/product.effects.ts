import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';

import {ProductService} from "../product.service";
import {LoadAction, LoadSuccessAction, ProductActionTypes} from "./product.actions";
import { Product } from '../product';

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
        })
      );
    })
  );
}
