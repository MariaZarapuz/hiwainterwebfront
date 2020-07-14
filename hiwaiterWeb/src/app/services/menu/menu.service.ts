import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = 'http://localhost:3000/api/plates';
  constructor(private httpClient: HttpClient) { }

  insertPlate(plate) {
    console.log(plate)
    this.httpClient.post(`${this.url}/add`, plate).toPromise();
  }
}
