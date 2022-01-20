import { Product } from './../../core/model/product';
import { ProductsService } from './../../core/services/products/products.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDataResolver implements Resolve<any> {
  constructor(private ps: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.ps.getProductById(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: ProductDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductDataResolver],
})
export class ProductsRoutingModule {}
