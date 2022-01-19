import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [],
})
export class ProductsModule {}
