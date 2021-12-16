import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../tournaments/list/list.component';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
  {
    path: 'tournaments',
    component: ListComponent, canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
