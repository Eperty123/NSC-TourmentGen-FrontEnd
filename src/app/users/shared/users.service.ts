import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserList} from "./user-list";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserList> {
  return this._http
    .get<UserList>(environment.api + '/User');
  }
}
