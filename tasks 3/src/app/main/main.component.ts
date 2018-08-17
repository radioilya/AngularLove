import { Component, OnInit } from '@angular/core';
import { PageH1 } from '../no_name';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  pageH1: PageH1 = {
    id: 10,
    name: 'Обо мне'
  };
  constructor() {


    }

  ngOnInit() {
  }

}
