import { Injectable } from '@angular/core';
import { environment } from '../envirnoment/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

   getFilms(){
    return this._http.get(environment.FilmsEndpoints);
   }

   getFilmsById(url: any){
    return this._http.get(url);
   }

   getPeopleById(url: any){
    return this._http.get(url);
   }

   getSpaceShipById(url: any){
    return this._http.get(url);
   }
}
