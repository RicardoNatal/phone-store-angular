import { Address } from './../../model/address';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  address: Address;

  addAddress(address: Address) {
    this.address = address;
  }

  getAddress() {
    return this.address;
  }

  removeAddress() {
    this.address = null;
    return this.address;
  }
}
