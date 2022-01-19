import { ProductsService } from './../../../core/services/products/products.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  productId: number;

  @Output()
  submit = new EventEmitter();

  formProduct: FormGroup;
  formTypeLabel: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      id: '',
      name: '',
      imageUrl: '',
      departament: '',
      price: '',
      comment: '',
    });

    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((value) => {
        this.formProduct.patchValue(value);
      });
    }
  }

  onSubmit(event: Product): void {
    this.productService.upsertProduct(event).subscribe(() => {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute,
      });
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id);

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cadastrar';
  }

  valueUpper = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1, value.lenght);
  };

  formInput = [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Imagem',
      name: 'imageUrl',
    },
    {
      label: 'Departament',
      name: 'departament',
    },
    {
      label: 'Price',
      name: 'price',
    },
    {
      label: 'Comment',
      name: 'comment',
    },
  ];
}
