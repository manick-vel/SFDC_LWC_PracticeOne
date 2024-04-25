import { LightningElement } from 'lwc';

export default class Day8DIY extends LightningElement {

  valueOne = 0;
  valueTwo = 0;
  answerVal = 0;

  //input1 = this.template.querySelector("lightning-input[name='inputVal1']").value;

  getInputVal1(event){
    this.valueOne = parseInt(event.target.value);
  }

  getInputVal2(event){
    this.valueTwo = parseInt(event.target.value);
  }

  // setAnswerVal(event){
  //   event.target.label = this.answerVal;
  // }

  addNumbers(event){
    this.doOperation('+');
   //this.template.querySelector("lightning-input[name='answerVal]").value = addAnswer;

   //console.log(event.view.document);
   //console.log(event.target);
   //console.log(event.target.template);
   //console.log(event.view.document.querySelector('.answerVal'));
  }

  subNumbers(){
    this.doOperation('-');
  }

  mulNumbers(){
    this.doOperation('*');
  }

  divNumbers(){
    this.doOperation('/');
  }

  clearNumbers(){
    this.doOperation('clear');
  }

  doOperation(calType){
    var answer = 0;
    
    switch(calType){
      case '+':
        answer = this.valueOne + this.valueTwo;
        break;

      case '-':
        answer = this.valueOne - this.valueTwo;
        break;
      
      case '*':
        answer = this.valueOne * this.valueTwo;
        break;

      case '/':
        answer = this.valueOne / this.valueTwo;
        break;
      
      case 'clear':
        this.template.querySelector("lightning-input[name='inputVal1']").value = "";
        this.valueOne = 0;

        // this.template.querySelector("lightning-input[name='inputVal2']").value = "";
        // this.valueTwo = 0;
        // break;
      
      default:
        answer = 0;
    }

    this.answerVal = answer;
  }
}