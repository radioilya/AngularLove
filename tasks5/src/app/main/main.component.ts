import {Component, OnInit} from '@angular/core';
import {TextMain} from '../model/main';
import {transition, trigger, useAnimation} from '@angular/animations';
import { bounceInLeft, bounceInRight} from 'ng-animate';
import { BackendMainService } from '../backend-main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('rollIn', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('BouncingLeft', [transition('* => *', useAnimation(bounceInRight))])
  ]
})


export class MainComponent implements OnInit {
  textMain: TextMain[];
  getMainSubscription: Subscription;
  constructor(private serviceMain: BackendMainService) {
  }
  ngOnInit() {
    this.getMainSubscription=this.serviceMain.getMain().subscribe((value: TextMain[])=> this.textMain=value);
  }
}
