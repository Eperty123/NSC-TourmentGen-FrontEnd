import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserList} from "./user-list";
import {environment} from "../../../environments/environment";
import {UserDto} from "./user.dto";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<UserList> {
    return this._http
      .get<UserList>(environment.api + '/User');
  }

  registerUser(username: string, password: string): Observable<UserDto> {
    return this._http.post<UserDto>(environment.api + '/User', {
      username,
      password
    });
    
  getUser(id: number): Observable<UserDto> {
    return this._http
      .get<UserDto>(environment.api + '/User/' + id);
  }

  updateUser(user: UserDto): Observable<UserDto> {
    return this._http
      .put<UserDto>(environment.api + '/User/' + user.id, user);

  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(environment.api + '/User/' + id);
  }
}
