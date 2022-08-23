import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { ConvertibleComponent } from './convertible/convertible.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { SedanComponent } from './sedan/sedan.component';

const routes: Routes = [
  {path:'sedan', 
  component:SedanComponent,
  children:[{
    path:'car', 
    component:CarComponent,
  }]
},
{path:'hatchback', 
  component:HatchbackComponent,
  children:[{
    path:'car', 
    component:CarComponent,
  }]
},
{path:'convertible', 
  component:ConvertibleComponent,
  children:[{
    path:'car', 
    component:CarComponent,
  }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
