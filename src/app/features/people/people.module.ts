import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ], exports: [
  ]
})
export class PeopleModule { }
