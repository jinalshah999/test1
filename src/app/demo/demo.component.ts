import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jinal',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


ans:number=0;
  constructor() { }

  ngOnInit() {
  }
onClick(num1,num2){
  this.ans=num1+num2;
}
}
