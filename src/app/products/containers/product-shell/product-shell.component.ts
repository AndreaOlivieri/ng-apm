import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import fromProductState, {
  currentProductSelector,
  errorSelector,
  productsSelector,
  showProductCodeSelector
} from "../../state/product.state";
import {
  ClearCurrentProductAction,
  DeleteAction,
  InitializeCurrentProductAction,
  LoadAction,
  SetCurrentProductAction,
  ToggleProductCodeAction,
  CreateAction, UpdateAction
} from "../../state/product.actions";
import {ProductService} from "../../product.service";
import { Store, select } from '@ngrx/store';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {

  displayCode$: Observable<boolean>;
  currentProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(
    private productService: ProductService,
    private store: Store<fromProductState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadAction());

    this.currentProduct$ = this.store.pipe(select(currentProductSelector));
    this.products$ = this.store.pipe(select(productsSelector));
    this.errorMessage$ = this.store.pipe(select(errorSelector));
    this.displayCode$ = this.store.pipe(select(showProductCodeSelector));
  }

  toggleProductCode(value: boolean): void {
    this.store.dispatch(new ToggleProductCodeAction(value));
  }

  initializeCurrentProduct(): void {
    this.store.dispatch(new InitializeCurrentProductAction());
  }

  setCurrentProduct(product: Product): void {
    this.store.dispatch(new SetCurrentProductAction(product));
  }

  clearCurrentProduct() {
    this.store.dispatch(new ClearCurrentProductAction());
  }

  createProduct(product: Product) {
    this.store.dispatch(new CreateAction(product));
  }

  updateProduct(product: Product) {
    this.store.dispatch(new UpdateAction(product));
  }

  deleteProduct(product: Product) {
    this.store.dispatch(new DeleteAction(product));
  }
}
