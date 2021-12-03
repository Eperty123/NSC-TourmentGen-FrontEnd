import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    CreateComponent,
    DeleteComponent,
    ListComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
