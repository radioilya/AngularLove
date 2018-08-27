import { Component, OnInit,OnDestroy } from '@angular/core';
import { TextMain } from './main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit,OnDestroy {
  textMain:TextMain;
  timerBeforeBirthday:Date;
  thisDate:Date;
  timerId:number;
  diff:number;
  day:number;
  dName:string;
  dayName:any;
  cases:any;
  constructor() {
    this.textMain = new TextMain(
      10,
      'Яковлев Илья',
      'text',
      'assets/images/sun.jpg',
       'Сын'
    );

    }
  ngOnInit() {
    this.timerId = setInterval(() => {
      this.thisDate = new Date();
      this.timerBeforeBirthday = new Date(2018, 8, 19, 0, 0, 0);
      this.diff = this.timerBeforeBirthday.valueOf() - this.thisDate.valueOf();
      this.day = Math.floor((this.diff / (1000 * 60 * 60 * 24)));
      if (this.day == 0) {
        alert('УРА');
        clearInterval(this.timerId);
      }
      if (this.day) {
        this.dayName = ['День', 'Дня', 'Дней']
        this.cases = [2, 0, 1, 1, 1, 2];
        this.dName = this.dayName[(this.day % 100 > 4 && this.day % 100 < 20) ? 2 : this.cases[(this.day % 10 < 5) ? this.day % 10 : 5]];
      }
    }, 1000);

  }


  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
