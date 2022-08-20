import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SedanComponent } from './sedan/sedan.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { ConvertibleComponent } from './convertible/convertible.component';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    SedanComponent,
    HatchbackComponent,
    ConvertibleComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
