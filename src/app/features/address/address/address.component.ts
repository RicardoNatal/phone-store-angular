import { Router } from '@angular/router';
import { Address } from './../../../core/model/address';
import { AddressService } from './../../../core/services/address/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  address: Address;

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit(): void {
    this.address = this.addressService.getAddress();
  }

  goBack() {
    this.router.navigate(['cart']);
  }
}
