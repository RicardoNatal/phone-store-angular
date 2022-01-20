import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];

  @Output()
  productsCart = [];

  number: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.allProducts().subscribe((value) => {
      this.products = value;
    });
  }

  editProduct(id: number) {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  addToCart(value: Product, price: string) {
    this.cartService.addToCart(value);
    this.cartService.values(Number(price));
    this.snack.open('Produto adicionado ao carrinho', 'OK');
  }

  private setProducts(products) {
    this.products = products;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((value) => {
      this.productService
        .allProducts()
        .subscribe((entities) => this.setProducts(entities));
      console.log(value);
    });
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
