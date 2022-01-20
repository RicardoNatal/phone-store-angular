import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, PeopleRoutingModule, SharedModule],
  exports: [],
})
export class PeopleModule {}
