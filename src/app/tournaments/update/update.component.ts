import { Component, OnInit } from '@angular/core';
import {UserDto} from "../../users/shared/user.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../users/shared/users.service";
import {TournamentService} from "../shared/tournament.service";
import {TournamentDto} from "../shared/tournament.dto";

@Component({
  selector: 'app-NSC-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private selectedId: number | undefined;
  public selectedTournament: TournamentDto | undefined;

  updateForm = new FormGroup({
    id: new FormControl({disabled: true}),
    name: new FormControl('', Validators.required)
  })

  constructor(private _route : ActivatedRoute, private _router : Router, private _tournamentService : TournamentService) { }
  get name() {return this.updateForm.get('name')}

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'))

    this._tournamentService.getTournament(this.selectedId).subscribe(tournament => {
      this.selectedTournament = tournament;
      this.updateForm.patchValue(tournament);
    });
  }
  doUpdate() {
    if(this.selectedTournament) {
      let tournament = this.updateForm.value as TournamentDto;
      tournament.id = this.selectedTournament.id;

      this._tournamentService.updateTournament(tournament).subscribe(tournament => {
        console.log(tournament)
        this._router.navigateByUrl('/').then(r => {})
      })
    }

  }
  }


