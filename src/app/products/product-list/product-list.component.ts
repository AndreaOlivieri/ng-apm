import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import fromProductState, {
  currentProductSelector, errorSelector,
  productsSelector,
  showProductCodeSelector
} from "../state/product.state";
import { Store, select } from '@ngrx/store';
import {
  InitializeCurrentProductAction, LoadAction,
  SetCurrentProductAction,
  ToggleProductCodeAction
} from '../state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(
    private productService: ProductService,
    private store: Store<fromProductState>,
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(currentProductSelector))
      .subscribe(currentProduct => this.selectedProduct = currentProduct);

    this.store.dispatch(new LoadAction());
    this.products$ = this.store.pipe(select(productsSelector));
    this.errorMessage$ = this.store.pipe(select(errorSelector));
    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });

    this.store.pipe(select(showProductCodeSelector))
      .subscribe(showProductCode => this.displayCode = showProductCode);
  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new ToggleProductCodeAction(value));
  }

  newProduct(): void {
    this.store.dispatch(new InitializeCurrentProductAction());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new SetCurrentProductAction(product));
  }

}
