import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  urlPlate = 'http://localhost:3000/api/plates';
  urlDrink = 'http://localhost:3000/api/drink';

  constructor(private httpClient: HttpClient) { }

  insertPlate(plate) {
    console.log(plate)
    this.httpClient.post(`${this.urlPlate}/add`, plate).toPromise();
  }

  insertDrink(drink) {
    console.log(drink)
    this.httpClient.post(`${this.urlDrink}/add`, drink).toPromise();
  }
}
