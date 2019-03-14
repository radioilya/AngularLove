import {Component, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce} from 'ng-animate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:[
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class MenuComponent implements OnInit {
  menu = new Menu();
  inputName: string;
  inputLink: string;
  arrMenu: Menu[] = [];


  constructor() {
    this.menu.link = 'https://vk.com/id245597432';
    this.menu.name = 'vk';
    this.arrMenu.push(this.menu);
  }


  ngOnInit() {
  }

}
