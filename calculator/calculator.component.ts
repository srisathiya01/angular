import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  val1:any='';
  input1=0;
  input2=0;
  operator="";
  constructor() { }

  ngOnInit() {
  }
  populateValue(val){
    console.log("you entered: ",val);
    this.val1=this.val1+''+val;

  }
  add(){
    this.input1=this.val1;
    this.val1='';
    this.operator="+";
  }
  result(){
    let input1 :number=this.input1;
    let input2 :number=parseInt(this.val1);
    let result :number=+input1+ +input2;
    if(this.operator==="+"){
      console.log('result ',(this.input1+parseInt(this.val1)));
      console.log('resul is :',result);
      this.val1=result;
    }
  }
}
