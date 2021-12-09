import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';
import { TokenDto } from '../shared/token.dto';

@Component({
  selector: 'app-NSC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  $success: string | undefined;
  $error: string | undefined;
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
    if (this._service.isLoggedIn())
      this._router.navigate(['']);
  }

  login() {
    let loginDto = this.loginForm.value as LoginDto;
    this._service.login(loginDto)
      .subscribe(token => {
        this._router.navigate(['/'])
      });
  }

  logout() {
    this._service.logout();
  }

}
