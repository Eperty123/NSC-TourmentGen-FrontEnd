import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {DetailsComponent} from "./details/details.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
