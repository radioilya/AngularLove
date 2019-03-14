import {Component, OnInit} from '@angular/core';
import {Skills} from '../../model/skills';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})

export class SkillComponent implements OnInit {
  skills: Skills[] = [];
  radius = 70;
  circumFerence = 2 * Math.PI * this.radius;
  dashoffset: number;

  constructor() {

    this.skills.push(new Skills('php', 70));
    this.skills.push(new Skills('angular', 30));
    this.skills.push(new Skills('javascript', 25));
    this.skills.push(new Skills('seo', 25));
  }



  ngOnInit() {
  }
}

