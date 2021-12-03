import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserDto} from "../../users/shared/user.dto";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TournamentDto} from "./tournament.dto";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private _http: HttpClient) { }
  getTournament(id: number): Observable<TournamentDto> {
    return this._http
      .get<TournamentDto>(environment.api + '/Tournament/' + id);
  }
}
