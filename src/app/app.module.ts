import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { StationsService } from './services/stations.service'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BaseStationsComponent } from './components/base-stations/base-stations.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';

//Routings 
import { AppRouting } from './routings';


@NgModule({
  declarations: [
    AppComponent,
    BaseStationsComponent,
    MapComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRouting,
  

  ],
  providers: [StationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
