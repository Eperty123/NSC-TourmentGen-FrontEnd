import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { DetailsComponent } from './details/details.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TournamentsModule { }
