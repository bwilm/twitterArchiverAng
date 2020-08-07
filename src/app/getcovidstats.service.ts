import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetcovidstatsService {

  dailyCovidUrl = 'https://covidtracking.com/api/v1/us/current.json';
  covidUrl = 'https://covidtracking.com/api/v1/states/';



  constructor( private http: HttpClient) { }

   public dailyUsNumbers(){
    return this.http.get(this.dailyCovidUrl);
  }

  public deathsByState(state){
    return this.http.get(this.covidUrl + '/' + state + '/info.json');
  }
}
