import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  baseProductUrl = `${environment.baseUrl}/products`;
  private _products = new Subject<Product>();

  allProducts() {
    return this.http.get<Product[]>(this.baseProductUrl);
  }

  getProductById(id) {
    return this.http.get<Product>(`${this.baseProductUrl}/${id}`);
  }

  getProducts() {
    return this._products.asObservable();
  }

  deleteProduct(id) {
    return this.http.delete(`${this.baseProductUrl}/${id}`);
  }

  upsertProduct(prod: Product) {
    if (prod.id) {
      return this.http.patch(`${this.baseProductUrl}/${prod.id}`, prod);
    } else {
      console.log('oi')
      return this.http.post(this.baseProductUrl, prod);
    }
  }

  setProduct(product) {
    this._products.next(product);
  }
}
