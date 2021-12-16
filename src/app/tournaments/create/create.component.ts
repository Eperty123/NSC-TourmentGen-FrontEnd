import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentService } from '../shared/tournament.service';
import { TournamentInputDto } from '../shared/tournamentinput.dto';

@Component({
  selector: 'app-NSC-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  $success: string | undefined;
  $error: string | undefined;
  createForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    participants: new FormControl("", [Validators.required]),
  });

  constructor(private _tournamentService: TournamentService, private _router: Router) { }

  ngOnInit(): void {
  }

  createTournament() {
    var tInput = this.createForm.value as TournamentInputDto;
    this._tournamentService.createTournament(tInput.name, tInput.participants).subscribe(
      success => {
        this._router.navigateByUrl("tournaments/details/" + success.id);
      },
      err => {
      });
  }

}
