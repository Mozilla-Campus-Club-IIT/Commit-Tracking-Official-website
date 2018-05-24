import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {

  constructor() { }

  //for typed 1 js to work
  ngOnInit() {
      var typed = new Typed("#typed", {
          stringsElement: '#typed-strings',
          smartBackspace: true ,
          backSpeed:40,
          typeSpeed:40,
          showCursor:false 
      });

  }
}
