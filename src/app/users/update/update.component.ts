import { Component, OnInit } from '@angular/core';
import {UserDto} from "../shared/user.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../shared/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TournamentDto} from "../../tournaments/shared/tournament.dto";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
private selectedId: number | undefined;
public selectedUser: UserDto | undefined;

updateForm = new FormGroup({
  id: new FormControl({disabled: true}),
  username: new FormControl('', Validators.required)

})

  constructor(private _route : ActivatedRoute, private _router : Router, private _userService : UsersService) { }

get name() {return this.updateForm.get('username')}

  ngOnInit(): void {
  this.selectedId = Number(this._route.snapshot.paramMap.get('id'))

    this._userService.getUser(this.selectedId).subscribe(user => {
    this.selectedUser = user;
    this.updateForm.patchValue(user);
    });
  }
doUpdate() {
if(this.selectedUser) {
let user = this.updateForm.value as UserDto;
user.id = this.selectedUser.id;

this._userService.updateUser(user).subscribe(user => {
  console.log(user)
this._router.navigateByUrl('/').then(r => {})
})
}

}

}
