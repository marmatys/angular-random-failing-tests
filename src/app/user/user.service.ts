import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  retrieveUser() {
    this.httpClient.get('/user').subscribe(user => {
      sessionStorage.setItem('user', JSON.stringify(user))
      }
    );
  };

  get currentUser(): User {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
