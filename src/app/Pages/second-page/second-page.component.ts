import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.less']
})
export class SecondPageComponent implements OnInit {
  fullCheck = true;
  fullNullCheck = true;
  selNullCheck = false;
  selDistinctCheck = false;
  constructor() { }

  ngOnInit(): void {
  }

  // click(){

  // }

}
