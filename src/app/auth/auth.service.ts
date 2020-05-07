import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //DEFAULT STATE OF USER AUTHENTICATED
  private _userIsAuthenticated = true;

  constructor() { }

  login(){
    this._userIsAuthenticated =true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }
}
