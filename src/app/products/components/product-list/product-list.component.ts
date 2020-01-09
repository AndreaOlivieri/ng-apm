import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() checkChanged = new EventEmitter<boolean>();
  @Output() productInitializated = new EventEmitter<void>();
  @Output() productSelected = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  changeCheck(value: boolean): void {
    this.checkChanged.emit(value);
  }

  initProduct(): void {
    this.productInitializated.emit();
  }

  selectProduct(product: Product): void {
    this.productSelected.emit(product);
  }

}
