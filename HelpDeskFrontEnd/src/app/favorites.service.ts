import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from './favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  getAll(cb: any) {

    this.http.get<Favorites[]>('https://localhost:7121/Favorites').subscribe(cb);

}

getOne(cb: any, id: number) {

    // Typo! Take out the [].

    this.http.get<Favorites>(`https://localhost:7121/Favorites/${id}`).subscribe(cb);

}

add(cb: any, emp: Favorites) {

    this.http.post<Favorites>('https://localhost:7121/Favorites', emp).subscribe(cb);

}

delete(cb: any, id: number) {

    this.http.delete(`https://localhost:7121/Favorites/${id}`).subscribe(cb);

}

update(cb: any, emp: Favorites) {

    this.http.put('https://localhost:7121/Favorites', emp).subscribe(cb);

}

  constructor(private http: HttpClient) { }
}
