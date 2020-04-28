import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  
  createNewUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  userValid(name:string,password:string){
    console.log(name+password);
    if(name){
      return true;
    }
    return true;
  }
}
