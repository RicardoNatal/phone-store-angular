import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  formEntity: FormGroup;

  @Output()
  submit = new EventEmitter();

  keys: string[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.formEntity.value).filter(
      (key) => key !== 'id'
    );

    this.activatedRoute.data.subscribe((value) => {
      if (value.product) {
        this.formEntity.patchValue(value.product);
      }
    });
  }

  goBack() {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    if (this.formEntity.valid) {
      this.submit.emit(this.formEntity.value);
    }
  }
}
