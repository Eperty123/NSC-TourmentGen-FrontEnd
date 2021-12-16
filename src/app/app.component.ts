import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token: string | null | undefined;
  constructor(private _authService: AuthService, private _router: Router) { }
  title = 'NSC-TourmentGen';

  logout() {
    this._authService.logout();
    this._router.navigateByUrl("auth/login");
  }

  isLoggedIn(): boolean {
    return this._authService.isLoggedIn() != null;
  }

  getRole(): string {
    return this._authService.getRole();
  }
}
