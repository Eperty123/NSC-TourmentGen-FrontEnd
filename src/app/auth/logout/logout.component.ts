import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-NSC-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
    if (this._service.isLoggedIn())
      this._service.logout();
    this._router.navigate(['/']);
  }

}
