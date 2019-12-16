import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  items:Array<any>=[];

  constructor() {
    this.items=[
      { name: 'assets/images/beach.jpg'},
      { name: 'assets/images/farm.jpg'},
      { name: 'assets/images/land.jpg'},
      { name: 'assets/images/beach.jpg'},
      { name: 'assets/images/farm.jpg'},
      { name: 'assets/images/land.jpg'},
      { name: 'assets/images/beach.jpg'},
      { name: 'assets/images/farm.jpg'},
      { name: 'assets/images/land.jpg'},
    ];
   }
  ngOnInit() {
  }

}
