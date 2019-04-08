import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import { TextAbout } from './model/about';
@Injectable({
  providedIn: 'root'
})
export class BackendAboutService {
  url = 'http://192.168.1.25/AngularLove/AngularLove/AngularLove/AngularLove/tasks5/src/backend/';
  constructor(private http: HttpClient) { }
  getAbout(): Observable<TextAbout[]> {
    //console.log('123');
    return this.http.get<TextAbout[]>(this.url+'about');
 
  }
}
