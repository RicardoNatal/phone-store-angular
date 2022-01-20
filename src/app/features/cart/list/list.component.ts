import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];

  value: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products.push(this.cartService.getItems());
    this.value = this.cartService.getValue();


    console.log(this.value)

    console.log(this.products);
  }
}
