import { Injectable } from '@angular/core';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Product[] = [];

  value: number = 0

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  values(value: number) {
   this.value = this.value + value
  }

  getValue() {
    return this.value;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  clearValue() {
    this.value = 0;
    return this.value
  }
}
