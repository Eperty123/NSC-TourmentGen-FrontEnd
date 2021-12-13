import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from './login.dto';
import { TokenDto } from './token.dto';
import { take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + "/auth/login", loginDto)
      .pipe(
        tap(token => {
          if (token && token.jwt) {
            // Save the token.
            localStorage.setItem(environment.loginTokenName, token.jwt);
            this.isLoggedIn$.next(token.jwt);
          } else this.logout();
        })
      )
  }

  logout(): Observable<boolean> {
    localStorage.removeItem(environment.loginTokenName);
    this.isLoggedIn$.next(null);
    return of(true).pipe(take(1));
  }

  isLoggedIn() {
    return this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(environment.loginTokenName);
  }
}
