import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '../shared/user.dto';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  registerForm = this._fb.group({
    username: [''],
    password: ['']
  });

  $message : string | undefined;

  constructor(private _fb: FormBuilder, private _service: UsersService) { }

  ngOnInit(): void {
  }

  register(): void {
    const userDto = this.registerForm.value as UserDto;
    this._service.register(userDto.username, userDto.password).subscribe(
      success => {
        this.$message = "Registration complete! Welcome to the family, " + userDto.username + "!";
        console.log(success);
      },
      err => {
        console.log(err);
      }
    );
  }
}
