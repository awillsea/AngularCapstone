import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getAll(cb: any) {

    // https://localhost:7147/Employee

    this.http.get<User[]>('https://localhost:7121/User').subscribe(cb);

}

getOne(cb: any, id: number) {

    // Typo! Take out the [].

    this.http.get<User>(`https://localhost:7121/User/${id}`).subscribe(cb);

}

add(cb: any, emp: User) {

    this.http.post<User>('https://localhost:7121/User', emp).subscribe(cb);

}

delete(cb: any, id: number) {

    this.http.delete(`https://localhost:7121/User/${id}`).subscribe(cb);

}

update(cb: any, emp: User) {

    this.http.put('https://localhost:7121/User', emp).subscribe(cb);

}

  constructor(private http: HttpClient) { }
}

