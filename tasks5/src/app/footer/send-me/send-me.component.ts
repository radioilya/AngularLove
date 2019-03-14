import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Latter} from '../../model/latter';

@Component({
  selector: 'app-send-me',
  templateUrl: './send-me.component.html',
  styleUrls: ['./send-me.component.css']
})

export class SendMeComponent implements OnInit {
  latter: Latter[] = [];
  clientFormControl = new FormControl('', [Validators.required]);
  massageFormControl = new FormControl('', [Validators.required, Validators.minLength(30)]);;
  emailFormControl  = new FormControl('', [Validators.required, Validators.email]);
  constructor() {
    
  }
 
  SendMail(name: string, mail: string, massage: string) {
    if (this.clientFormControl.valid && this.emailFormControl.valid  && this.massageFormControl.valid) {
      this.latter.push(new Latter(name, mail, massage));
      console.log(this.latter);
    }
  }


  ngOnInit() {

}
}
