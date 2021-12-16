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
  role$ = new BehaviorSubject<string | null>(this.getRole());

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + "/auth/login", loginDto)
      .pipe(
        tap(token => {
          if (token && token.jwt) {

            // Split the token content.
            var tokenSplitter = environment.tokenSplitter;
            var tokenContent = token.jwt.split(tokenSplitter);
            var jwtToken = tokenContent[1] as string;
            var role = atob(tokenContent[0]);

            // Save the token and role...
            localStorage.setItem(environment.loginTokenName, token.jwt);
            this.isLoggedIn$.next(jwtToken);
            this.role$.next(role);
          } else this.logout();
        })
      )
  }

  logout(): Observable<boolean> {
    localStorage.removeItem(environment.loginTokenName);
    this.isLoggedIn$.next(null);
    this.role$.next(null);
    return of(true).pipe(take(1));
  }

  isLoggedIn() {
    return this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(environment.loginTokenName);
  }

  getJwtToken(): string | null {
    return this.getToken()?.split(environment.tokenSplitter)[1] as string;
  }

  getRole(): string {
    var encodedRole = this.getToken()?.split(environment.tokenSplitter)[0] as string
    if (encodedRole) return atob(encodedRole);
    return "";
  }
}
