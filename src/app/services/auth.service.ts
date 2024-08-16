import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {TokenModel} from "../models/token.model";
import {Router} from "@angular/router";
import {environment} from "../../environment/environment-dev";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private readonly TOKEN_KEY = 'id_token';
  private readonly TOKEN_EXPIRE = 'expires_at';
  private readonly SERVICE_URL = this.apiUrl     + '/auth';

  private http = inject(HttpClient);
  private router = inject(Router);

  login(login: string, password: string) {
    return this.http.post<TokenModel>(`${this.SERVICE_URL}/login`, {login, password})
      .pipe(
        map(res => this.setSession(res))
      );
  }

  private setSession(token: TokenModel) {
    const expiresAt = Date.now() + token.expiresIn;

    localStorage.setItem(this.TOKEN_KEY, token.token);
    localStorage.setItem(this.TOKEN_EXPIRE, expiresAt.toString());
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRE);

    this.router
      .navigate(["/login"])
      .then();
  }

  public isLoggedIn() {
    return !!localStorage.getItem(this.TOKEN_KEY)
      && this.isExpired();
  }

  isExpired() {
    const expiresAt = localStorage.getItem(this.TOKEN_EXPIRE);
    return expiresAt ? Date.now() < new Date(expiresAt).getDate() : false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
