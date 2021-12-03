import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../shared/user.dto';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  $success: string | undefined;
  $error: string | undefined;
  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  constructor(private _service: UsersService) { }

  ngOnInit(): void {
  }

  register(): void {
    let userDto = this.registerForm.value as UserDto;
    this._service.registerUser(userDto.username, userDto.password).subscribe(
      success => {
        this.$success = "Registration complete! Welcome to the family, " + userDto.username + "!";
        console.log(success);
      },
      err => {
        this.$error = "Registration failed for: " + userDto.username + "!";
        console.log(err);
      }
    );
  }
}
