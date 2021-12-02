import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { TournamentList } from './tournament-list';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private _http: HttpClient) {
  }

  getTournaments(): Observable<TournamentList> {
    return this._http
      .get<TournamentList>(environment.api + '/Tournament');
  }
}
