import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/core/model/person';
import { PeopleService } from 'src/app/core/services/people/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  personId: number;

  @Output()
  submit = new EventEmitter();

  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ps: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      id: '',
      name: '',
      age: '',
      email: '',
      phone: '',
    });

    if (this.personId) {
      this.ps.getPersonById(this.personId).subscribe((value) => {
        this.formPerson.patchValue(value);
      });
    }
  }

  onSubmit(event: Person): void {
    this.ps.upsertperson(event).subscribe(() => {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute,
      });
    });
  }

  formInput = [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Age',
      name: 'age',
    },
    {
      label: 'E-mail',
      name: 'email',
    },
    {
      label: 'Phone',
      name: 'phone',
    },
  ];
}
