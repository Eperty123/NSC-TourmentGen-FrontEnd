import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDto} from "../shared/user.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private selectedId: number | undefined;
  public selectedUser: UserDto | undefined;

  detailsForm = new FormGroup( {
    id: new FormControl({ disabled: true }),
    username: new FormControl('', Validators.required)
  });

  constructor(private _route : ActivatedRoute, private _router : Router, private _usersService : UsersService) { }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._usersService.getUser(this.selectedId).subscribe(user => {
      this.selectedUser = user;
      this.detailsForm.patchValue(user);
    });
  }

}

