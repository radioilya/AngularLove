import { Component, OnInit } from '@angular/core';
import { TextAbout } from '../model/about';
import { Subscription } from 'rxjs';
import { BackendAboutService } from '../backend-about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  textAbout: TextAbout[]=[];
  getAboutSubscription: Subscription;
  constructor(private serviceAbout: BackendAboutService) {

 
  }
  ngOnInit() {
    this.getAboutSubscription=this.serviceAbout.getAbout().subscribe(
      (data:TextAbout[]) =>  {
        this.textAbout = data["textAbout"];
        }
      );
     
  }
}