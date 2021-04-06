import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly userapiurl='https://localhost:44379/api/Users';
  formData:Users=new Users();
  UserList:Users[];

  constructor(private objHttp:HttpClient) { }

  List()
  {
    this.objHttp.get(this.userapiurl).toPromise().then(res=>this.UserList=res as Users[]);
  }
}
