import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = new Menu();
  inputName: string;
  inputLink: string;
  arrMenu: Menu[]=[];

  add(){

    this.menu = new Menu();
    this.menu.link=this.inputLink;
    this.menu.name=this.inputName;
    this.arrMenu.push(this.menu);
    localStorage.setItem( 'menu', JSON.stringify(this.arrMenu));
  }

  constructor() {
    this.menu.link='https://vk.com/id245597432';
    this.menu.name='vk';
    this.arrMenu.push(this.menu);
  }


  ngOnInit() {
    if ( localStorage.getItem('menu') != null )
    {
      this.arrMenu = JSON.parse(localStorage.getItem('menu'));
    }
  }

}
