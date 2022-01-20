import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { NgxViacepModule } from "@brunoc/ngx-viacep";


@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CartRoutingModule, FormsModule, NgxViacepModule],
  exports: [],
})
export class CartModule {}
