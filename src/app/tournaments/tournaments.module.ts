import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule
  ]
})
export class TournamentsModule { }
