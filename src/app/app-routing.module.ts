import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DetailComponent} from './detail/detail.component';
import {BoxesComponent} from './boxes/boxes.component';

const routes: Routes = [
  {path: '', component: BoxesComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
