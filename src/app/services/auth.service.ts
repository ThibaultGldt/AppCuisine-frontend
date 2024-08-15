import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {TokenModel} from "../models/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serviceUrl = '/auth'

  constructor(private http:HttpClient) { }

  login(login: string, password: string) {
    return this.http.post<TokenModel>('/api/login', {login, password})
      .pipe(
        map(res => this.setSession(res))
      );
  }

  private setSession(token: TokenModel) {
    const expiresAt = ().pipe()
    //TODO WIP Implémenter session avec token récupérer + interceptor + guard (? alternative mieux ?)
    localStorage
  }
}
