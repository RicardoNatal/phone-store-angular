import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddressComponent],
  imports: [CommonModule, FormsModule],
})
export class AddressModule {}
