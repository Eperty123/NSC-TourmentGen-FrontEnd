import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TournamentService} from "../shared/tournament.service";
import {UserDto} from "../../users/shared/user.dto";
import {TournamentDto} from "../shared/tournament.dto";

@Component({
  selector: 'app-NSC-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  $success: string | undefined;
  $error: string | undefined;
  deleteForm = new FormGroup({
    id: new FormControl("", [Validators.required, Validators.minLength(1)]),
  });

  constructor(private _service: TournamentService) { }

  ngOnInit(): void {
  }
  delete(): void {
    let tournamentDto = this.deleteForm.value as TournamentDto;
    this._service.deleteTournament(tournamentDto.id).subscribe(
      success => {
        tournamentDto = success as TournamentDto;
        this.$success = "Successfully deleted: " + tournamentDto.name + "!";
        console.log(success);
      },
      err => {
        this.$error = "Failed to delete: " + tournamentDto.id + "!";
        console.log(err);
      }
    );
  }

}
