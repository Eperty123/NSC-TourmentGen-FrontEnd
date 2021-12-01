import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
