import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor( private activatedRoute: ActivatedRoute) { }

  public isAuthenticated(): boolean {
    const token = this.getAccessToken();
    if ( token == null) { return false; }

    return this.isTokenValid(token);
  }

  isTokenValid(token: string) {

    // TODO: Add logic to check that the token is valid
    const tokenDate = this.getTokenExpirationDate(token);
    if (tokenDate === undefined) { return false; }

    if (tokenDate.valueOf() < new Date().valueOf()) {
      return false;
    }else {
      return true;
    }
  }

  getTokenExpirationDate(token: string) {
    const decodedToken = jwt_decode(token);
    if (decodedToken.exp === undefined) {return null; }

    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  getAccessToken(): string{
    return localStorage.getItem('token');
  }

  setAccessToken(): void{
    const fragment = this.activatedRoute.snapshot.fragment;
    const access_token = fragment.match(new RegExp('(?:access_token=)(.*?)(?:&)'));
    localStorage.setItem('token', access_token[1]);
  }
}
