import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import { TextMain } from './model/main';
import { potrfolioImg } from './model/portfolio';
@Injectable({
  providedIn: 'root'
})
export class BackendMainService {
  url = 'http://192.168.1.25/AngularLove/AngularLove/AngularLove/AngularLove/tasks5/src/backend/';
  constructor(private http: HttpClient) { }
  getMain(): Observable<TextMain[]> {
    //console.log('123');
    return this.http.get<TextMain[]>(this.url+'main');
    
  }
  

getPortfolio(): Observable<potrfolioImg[]> {
  //console.log('123');
  return this.http.get<potrfolioImg[]>(this.url+'portfolio');
  
}


}