import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  urlPlate = 'http://localhost:3000/api/plates';
  urlDrink = 'http://localhost:3000/api/drinks';
  urlMenu = 'http://localhost:3000/api/menu';


  constructor(private httpClient: HttpClient) { }

  insertPlate(plate) {
    this.httpClient.post(`${this.urlPlate}/add`, plate).toPromise();
  }

  insertDrink(drink) {
    this.httpClient.post(`${this.urlDrink}/add`, drink).toPromise();
  }

  getMenu() {
    return this.httpClient.get(`${this.urlMenu}/listProducts`).toPromise();
  }

  activeOrNoActiveDrink(id, active) {
    this.httpClient.put(`${this.urlDrink}/updateActive`, { active, id }).toPromise();
  }
  activeOrNoActivePlaces(id, active) {
    this.httpClient.put(`${this.urlPlate}/updateActive`, { active, id }).toPromise();
  }
  getFormDrinkModify(id) {
    return this.httpClient.get(`${this.urlDrink}/${id}`).toPromise();
  }

  formModify(id, data) {
    this.httpClient.put(`${this.urlDrink}/edit/${id}`, { data }).toPromise();
  }
}
