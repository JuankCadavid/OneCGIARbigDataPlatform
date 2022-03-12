import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular google maps
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    SharedModule,
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDt2kmEVursAc5whCFCwg_2svD37df9n0A',
			libraries: [ 'places' ],
			apiVersion: 'quarterly'
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
