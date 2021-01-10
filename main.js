var adding = false;
var minus = false;
var mul = false;
var div = false;
var val1 = 0;
document.getElementById("king").value = '';

function myFunction(num) {
  if(document.getElementById("king").value == '.'){
      var v = document.getElementById("king");
      document.getElementById("king").value += num.toString();
    }else{
      var v = document.getElementById("king");
      console.log(v.value);
      document.getElementById("king").value += num.toString();
      document.getElementById("king").innerHTML = document.getElementById("king").value;
    }
}
function add(){
  var val = document.getElementById("king");
  val1 += parseFloat(val.value);
  document.getElementById("king").value = '';
  document.getElementById("king").innerHTML = ''; 
  adding = true;
  minus = false;
  div = false;
  mul = false;
}
function Minus(){
  var val = document.getElementById("king");
  if(val1 != 0){
  val1 -= parseFloat(val.value);
  document.getElementById("king").value = '';
  document.getElementById("king").innerHTML = ''; 
} else{
  add();
}
  adding = false;
  minus = true;
  mul = false;
  div = false;
}
function MUL(){
  var val = document.getElementById("king");
  if(val1 != 0){
  val1 *= parseFloat(val.value);
  document.getElementById("king").value = '';
  document.getElementById("king").innerHTML = ''; 
} else{
  add();
}
  adding = false;
  minus = false;
  mul = true;
  div = false;
}
function DIV(){
  var val = document.getElementById("king");
  if(val1 != 0){
  val1 /= parseFloat(val.value);
  document.getElementById("king").value = '';
  document.getElementById("king").innerHTML = ''; 
} else{
  add();
}
  adding = false;
  minus = false;
  mul = false;
  div = true;
}
function AC(){
  val1 = 0;
  document.getElementById("king").value = '0';
  document.getElementById("king").innerHTML = '0';
  minus = false;
  Adding = false;
  mul = false;
  div = false;
}
function equel(){
  var num = 0;
  var v = document.getElementById("king");
  if(adding == true){
    val1 = val1 + parseFloat(v.value);
  }else if(minus == true){
    val1 = val1 - parseFloat(v.value);
  }else if(mul == true){
    console.log(val1,parseFloat(v.value));
    val1 = val1 * parseFloat(v.value);
  }else if(div == true){
    val1 = val1 / parseFloat(v.value);
  }

  num = val1;
  val1 = 0;
  
  document.getElementById("king").value = '';

  myFunction(num);
  
  minus = false;
  Adding = false;
  mul = false;
  div = false;
}
