import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from './login.dto';
import { TokenDto } from './token.dto';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + "/auth/login", loginDto)
      .pipe(
        tap(token => {
          if (token && token.jwt)
            // Save the token.
            localStorage.setItem(environment.loginTokenName, token.jwt);
        })
      )
  }

  logout() {
    if (this.getToken())
      localStorage.removeItem(environment.loginTokenName);
  }

  isLoggedIn() {
    return this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(environment.loginTokenName);
  }
}
