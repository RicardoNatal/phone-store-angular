import { PeopleService } from './../../../core/services/people/people.service';
import { Router } from '@angular/router';
import { AddressComponent } from './../../address/address/address.component';
import { AddressService } from './../../../core/services/address/address.service';
import { Address } from './../../../core/model/address';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];

  people = [];

  cep: string = '';

  value: number;

  listLabel: String;

  options = ['Cartão de crédito', 'Pix', 'Cartão de débito', 'Boleto Bancário'];

  constructor(
    private cartService: CartService,
    private viacep: NgxViacepService,
    private addressService: AddressService,
    private dialog: MatDialog,
    private route: Router,
    private peopleService: PeopleService,
    private snack: MatSnackBar
  ) {}

  goToProducts() {
    this.route.navigate(['products']);
  }

  openDialog() {
    this.dialog.open(AddressComponent);
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.value = this.cartService.getValue();
    this.peopleService.allPeople().subscribe((people) => {
      this.people = people;
    });

    let hasProducts = Boolean(this.products.length);

    this.listLabel = hasProducts
      ? 'Produtos selecionados: '
      : 'Nenhum produto selecionado ainda: ';
  }

  viacepCatch(cep) {
    this.viacep.buscarPorCep(cep).subscribe((value: Address) => {
      this.addressService.addAddress(value);
    });
  }

  guardarValor(event) {
    let cep: String = event.target.value;
    if (cep) {
      if (cep.length == 8) {
        this.viacepCatch(cep);
        this.snack.open('CEP cadastrado sucesso!', 'OK');
      } else {
        if (cep.length < 8) {
          this.snack.open('O CEP inserido é curto demais!', 'OK');
        } else if (cep.length > 8) {
          this.snack.open('O CEP inserido é grande demais!', 'OK');
        }
      }
    } else {
      this.snack.open('Informe um CEP válido!', 'OK');
    }
  }

  clearCart() {
    this.products = this.setProducts(this.cartService.clearCart());
    this.value = 0;
    this.snack.open('Compra efetuada com sucesso!', 'OK');
    this.listLabel = 'Obrigado por escolher a nossa loja!';
    return this.products;
  }


  //          TERMINAR
  // removerDaLista(id: number) {
  //   this.productService.deleteProduct(id).subscribe((value) => {
  //     this.productService
  //       .allProducts()
  //       .subscribe((entities) => this.setProducts(entities));
  //     console.log(value);
  //   });
  // }

  finalizarCompra() {
    this.cartService.clearCart();
  }

  setProducts(producs): any {
    this.products = producs;
  }
}
