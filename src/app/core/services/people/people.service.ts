import { Person } from './../../model/person';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  basePersonUrl = `${environment.baseUrl}/people`;
  private _people = new Subject<Person>();

  allPeople() {
    return this.http.get<Person[]>(this.basePersonUrl);
  }

  getPersonById(id) {
    return this.http.get<Person>(`${this.basePersonUrl}/${id}`);
  }

  getPeople() {
    return this._people.asObservable();
  }

  deletePerson(id) {
    return this.http.delete(`${this.basePersonUrl}/${id}`);
  }

  upsertperson(person: Person) {
    if (person.id) {
      return this.http.patch(`${this.basePersonUrl}/${person.id}`, person);
    } else {
      return this.http.post(this.basePersonUrl, person);
    }
  }

  setPerson(person) {
    this._people.next(person);
  }
}
