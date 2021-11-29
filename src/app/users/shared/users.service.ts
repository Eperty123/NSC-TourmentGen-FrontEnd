import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserList } from './user-list';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }


  getUsers(): Observable<UserList> {
    return this._http.get<UserList>(environment.api + "/User");
  }
}
