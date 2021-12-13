import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserList } from '../shared/user-list';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  $users: Observable<UserList> | undefined;
  $error: string | undefined;
  constructor(private _service: UsersService) { }

  ngOnInit(): void {
    this.$users = this._service.getUsers()
      .pipe(
        catchError(errMsg => {
          this.$error = (errMsg ? errMsg.statusText : errMsg) as string;
          return throwError(errMsg);
        })
      )
  }

}
