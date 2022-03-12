import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherSericeService {

  public API_URI: string;


  constructor(private http: HttpClient) { 
    this.API_URI = environment.apiUrl;
  }


  getAnimals(): Observable<any> {

    return this.http.get(`${this.API_URI}activities/registered/` );

  }


  getZones(): Observable<any> {

    return this.http.get(`${this.API_URI}zones/` );

  }

  getTypeZone(type:string): Observable<any>{
    
    return this.http.get(`${this.API_URI}zones/type/${type}` );
  }

 

}
