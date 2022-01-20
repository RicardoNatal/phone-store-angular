import { PeopleService } from './../../../core/services/people/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  people = [];

  constructor(
    private ps: PeopleService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ps.allPeople().subscribe((value) => {
      this.people = value;
    });
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.activeRoute,
    });
  }

  deletePerson(id: number) {
    this.ps.deletePerson(id).subscribe((value) => {
      this.ps.allPeople().subscribe((entities) => this.setPeople(entities));
      console.log(value);
    });
  }

  private setPeople(people) {
    this.people = people;
  }

  editPerson(id: number) {
    this.router.navigate([id], {
      relativeTo: this.activeRoute,
    });
  }
}
