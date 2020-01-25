import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calculate(val1:HTMLInputElement,val2:HTMLInputElement,resultTxt:HTMLInputElement){
    let a=parseInt(val1.value);
    let b=parseInt(val2.value);
    let result=a+b;
    resultTxt.value=result+"";

  }

}
