import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../users/shared/users.service";
import { TournamentDto } from "../shared/tournament.dto";
import { TournamentService } from "../shared/tournament.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WinnerDto } from '../shared/winner.dto';

@Component({
  selector: 'app-NSC-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private selectedId: number | undefined
  public selectedTournament: TournamentDto | undefined

  detailsForm = new FormGroup({
    id: new FormControl({ disabled: true }),
    name: new FormControl('', Validators.required)
  });

  winnerForm = new FormGroup({
    participantId: new FormControl({ disabled: true }),
    roundId: new FormControl({ disabled: true }),
    bracketId: new FormControl({ disabled: true }),
    tournamentId: new FormControl({ disabled: true }),
  });


  constructor(private _route: ActivatedRoute, private _router: Router, private _tournamentService: TournamentService) { }


  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._tournamentService.getTournament(this.selectedId).subscribe(tournament => {
      this.selectedTournament = tournament;
      this.detailsForm.patchValue(tournament);
    });
  }

    makeWinner(bracketId: number, participantId: number, roundId: number) {
    //var winnerDto = this.winnerForm.value as WinnerDto;
    this._tournamentService.makeWinner({
      bracketId: bracketId,
        participantId : participantId,
          roundId: roundId,
          tournamentId: this.selectedTournament?.id
      }).subscribe(res => {
      location.reload();
    });
  }

}
