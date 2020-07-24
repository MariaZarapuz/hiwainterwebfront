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
    return this.httpClient.post(`${this.urlDrink}/add`, drink).toPromise();
  }

  sendImage(img, id) {
    console.log(img);
    return this.httpClient.post(`${this.urlDrink}/upload/${id}`, img).toPromise();

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
  getFormModify(id, category) {
    if (category === 'drink') {
      return this.httpClient.get(`${this.urlDrink}/${id}`).toPromise();
    } else {
      return this.httpClient.get(`${this.urlPlate}/${id}`).toPromise();
    }
  }

  formModify(id, data) {
    if (data.category === 'drink') {
      this.httpClient.put(`${this.urlDrink}/edit/${id}`, { data }).toPromise();
    } else {
      this.httpClient.put(`${this.urlPlate}/edit/${id}`, { data }).toPromise();
    }
  }

  deletectProduct(id, category) {
    if (category === 'drink') {
      return this.httpClient.delete(`${this.urlDrink}/delete/${id}`).toPromise();
    } else {
      return this.httpClient.delete(`${this.urlPlate}/delete/${id}`).toPromise();
    }

  }
}
