import { Person } from './../../core/model/person';
import { PeopleService } from './../../core/services/people/people.service';
import { Observable } from 'rxjs';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable()
export class PersonDataResolver implements Resolve<any> {
  constructor(private ps: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    return this.ps.getPersonById(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: PersonDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PersonDataResolver],
})
export class PeopleRoutingModule {}
