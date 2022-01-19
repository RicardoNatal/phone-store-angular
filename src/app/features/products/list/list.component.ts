import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
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

  private setProducts(products) {
    this.products = products;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((value) => {
      this.productService.allProducts().subscribe((entities) => this.setProducts(entities));
      console.log(value);
    });
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }
}
