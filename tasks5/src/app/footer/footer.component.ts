import { Component, OnInit } from '@angular/core';
import {GlobalContent} from "../global-content";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:GlobalContent;
  constructor() {
    this.footer = new GlobalContent(
      89069150313,
      'Radioilya@yanex.ru',
      '«Бэкап Шрёдингера: состояние любого бэкапа остаётся неизвестным, пока его не попробовали восстановить» Стыренно из Хабра'
    );
  }


  ngOnInit() {
  }

}
