import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/api/users';

  constructor(private httpClient: HttpClient) { }

  login(formValue): Promise<any> {
    const user = this.httpClient.post(`${this.url}/login`, formValue).toPromise();
    return user;

  }
}
