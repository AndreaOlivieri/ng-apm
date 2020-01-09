import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() selectedProduct: Product;
  @Input() products: Product[];
  @Output() onCheckChanged = new EventEmitter<boolean>();
  @Output() onNewProduct = new EventEmitter<void>();
  @Output() onProductSelected = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
  }

  checkChanged(value: boolean): void {
    this.onCheckChanged.emit(value);
  }

  newProduct(): void {
    this.onNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.onProductSelected.emit(product);
  }

}
