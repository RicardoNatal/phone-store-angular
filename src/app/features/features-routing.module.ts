import { PageNotFoundComponent } from './../core/components/page-not-found/page-not-found.component';
import { FormComponent } from './../features/people/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: async () =>
      import('./products/products.module').then((p) => p.ProductsModule),
  },
  {
    path: 'people',
    loadChildren: async () =>
      import('./people/people.module').then((p) => p.PeopleModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'people',
    component: FormComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
