import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentList } from '../shared/tournament-list';
import { TournamentService } from '../shared/tournament.service';

@Component({
  selector: 'app-NSC-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  $tournaments: Observable<TournamentList> | undefined;
  constructor(private _service: TournamentService) { }

  ngOnInit(): void {
    this.$tournaments = this._service.getTournaments();
  }

}
