import { PeopleService } from './../../../core/services/people/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  people = [];

  constructor(private ps: PeopleService) { }

  ngOnInit(): void {
    this.ps.allPeople().subscribe((value) => {
      this.people = value
    })
  }

}
