import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedanComponent } from './sedan/sedan.component';

const routes: Routes = [
  {path:'sedan', component:SedanComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
