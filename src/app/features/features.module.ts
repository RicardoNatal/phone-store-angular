import { PeopleModule } from './people/people.module';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    PeopleModule,
  ],
  exports: [],
})
export class FeaturesModule {}
