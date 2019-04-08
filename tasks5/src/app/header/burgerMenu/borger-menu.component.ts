import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-borger-menu',
  templateUrl: './borger-menu.component.html',
  styleUrls: ['./borger-menu.component.css']
})
export class BorgerMenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

 
  close(reason: string) {
     this.sidenav.close();
  }

  ngOnInit() {
  }
 
}
