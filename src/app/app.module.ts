import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import { FlightComponent } from "./app.flightcomponent";
import { CommonModule } from "@angular/common";
import { FlightSearchPipe } from "./FlightSearch";
import { FlightSortPipe } from "./FlightSort";



@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,CommonModule],
  declarations: [ AppComponent,FlightComponent,FlightSearchPipe,FlightSortPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
