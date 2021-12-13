import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';

@Component({
  selector: 'app-NSC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  $success: string | undefined;
  $error: string | undefined;
  tokenSubscription: Subscription | undefined;

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.tokenSubscription = this._service.isLoggedIn$.subscribe(token => {

      // Redirect somewhere else if we are already logged in.
      if (token && token.length > 0)
        this._router.navigate(['/'])
    })
  }

  ngOnDestroy(): void {
    this.tokenSubscription?.unsubscribe();
  }

  login() {
    let loginDto = this.loginForm.value as LoginDto;
    this._service.login(loginDto)
      .pipe(
        catchError(errMsg => {
          this.$error = errMsg as string;
          return throwError(errMsg);
        })
      )
      .subscribe(token => {
        if (token && token.jwt)
          this._router.navigate(['/'])
        else this.$error = token.message;
      });
  }

  logout() {
    this._service.logout();
  }

}
