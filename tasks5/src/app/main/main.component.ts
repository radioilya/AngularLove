import {Component, OnInit} from '@angular/core';
import {TextMain} from '../model/main';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceInLeft, bounceInRight, rollIn} from 'ng-animate';

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
  textMain: TextMain;

  constructor() {
    this.textMain = new TextMain(
      10,
      'Яковлев Илья',
      ' Меня зовут Илья, мне очень трудно дался текст, но я старался.\n' +
      'У меня есть жена, и сын (он на фотографии).\n' +
      'Обучался в ИИФиРЭ по специальности "радиотехника" бросил на 5 курсе.\n' +
      'Сейчас работаю Backend разработчиком в компании по разработке сайтов, из последних достижений:' +
      '\n' +
      'Обновил все сайты компании до актуальной версии PHP.\n' +
      'Провел рефакторинг имеющейся cистемы управления сайтом и ввел ORM.',
      'assets/images/sun.jpg',
      'Сын'
    );
  }

  ngOnInit() {
  }
}
