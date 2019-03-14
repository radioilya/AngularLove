import {Component, OnInit} from '@angular/core';
import {GlobalContent} from './../global-content';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: GlobalContent;

  constructor() {
    this.header = new GlobalContent(
      89069150313,
      'Radioilya@yanex.ru',
      '«Бэкап Шрёдингера: состояние любого бэкапа остаётся неизвестным, пока его не попробовали восстановить» Стыренно из Хабра'
    );
  }

  ngOnInit() {
  }

}
