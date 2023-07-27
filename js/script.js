//text change
function textChange(){
  document.getElementById('h2').innerHTML = "Hello there!";
}

//show date
function showDate(){
  document.getElementById('d_h2').innerHTML = Date();
}
//variable ex
function dataRepeat(){
  var message = "Welcome to SS"

  document.getElementById('dr').innerHTML = message.repeat(3);
}
//on off
function bulbOn(){
  document.getElementById('bulb').src ='images/on.gif';

}
function bulbOff(){
  document.getElementById('bulb').src ='images/off.gif';
  
}
//font size
function fontSize(){
  document.getElementById('fs').style.color =("red");
}
// show/hide
function textShow(){
  document.getElementById('tsh').style.display =('block')

}
function textHide(){
   document.getElementById('tsh').style.display =('none')
}
function outPut(){
  var number1, number2, result;
  number1 = 5;
  number2 = 20;
  result = number1 + number2;
  document.getElementById('ot').innerHTML = result;
}
function outPut2(){
  var number3, number4, result;
  number3 = 5;
  number4 = 20;
  result = number4 - number3;
  document.getElementById('ot2').innerHTML = result;
}



