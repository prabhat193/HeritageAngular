import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import {Type} from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Users;

  login(Type: Type) {
   
    this.user.Type = Type;
  }


  constructor() { }
  isAuthorized() {
    return !!this.user;
}

hasRole(Type: Type) 
{
    return this.isAuthorized() && this.user.Type === Type;
}

// login(Type: Type) {
//   this.user = { Type: Type };
// }

logout() {
  this.user = null;
}
}
