import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../shared/user.dto';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  $success: string | undefined;
  $error: string | undefined;
  deleteForm = new FormGroup({
    id: new FormControl("", [Validators.required, Validators.minLength(1)]),
  });

  constructor(private _service: UsersService) { }

  ngOnInit(): void {
  }

  delete(): void {
    let userDto = this.deleteForm.value as UserDto;
    this._service.deleteUser(userDto.id).subscribe(
      success => {
        userDto = success as UserDto;
        this.$success = "Successfully deleted: " + userDto.username + "!";
        console.log(success);
      },
      err => {
        this.$error = "Failed to delete: " + userDto.id + "!";
        console.log(err);
      }
    );
  }
}
