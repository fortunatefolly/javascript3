
//add
document.getElementById("addition").onclick = function add(num1, num2){
  //get first number for the variable
  var num1 = document.getElementById('first').value;
  //get the second number
  var num2 = document.getElementById('second').value;
  //equation
  var r = parseFloat(num1) + parseFloat(num2);
  //create the string
  var adding = num1 + '+' + num2 + '=' + r;
  // if then statement for empty input
  if (num1 == "" || num2 == ""){
  	document.getElementById('result').innerHTML = "Please enter Value"
  } else {
  	//hopefully will return string
  	document.getElementById('result').innerHTML = adding;
  	}
  }

// substract
document.getElementById("subtract").onclick = function minus(num1, num2){
  //get first number for the variable
  var num1 = document.getElementById('first').value;
  //get the second number
  var num2 = document.getElementById('second').value;
  //equation
  var r = parseFloat(num1) - parseFloat(num2);
  //create the string
  var subtracting = num1 + '-' + num2 + '=' + r;
  // if then statement for empty input
  if (num1 == "" || num2 == ""){
  	document.getElementById('result').innerHTML = "Please enter Value"
  } else {
  	//hopefully will return string
  	document.getElementById('result').innerHTML = subtracting;
  	}
  }
// multiply
document.getElementById("multiply").onclick = function times(num1, num2){
  //get first number for the variable
  var num1 = document.getElementById('first').value;
  //get the second number
  var num2 = document.getElementById('second').value;
  //equation
  var r = parseFloat(num1) * parseFloat(num2);
  //create the string
  var multiplying = num1 + '*' + num2 + '=' + r;
  // if then statement for empty input
  if (num1 == "" || num2 == ""){
  	document.getElementById('result').innerHTML = "Please enter Value"
  } else {
  	//hopefully will return string
  	document.getElementById('result').innerHTML = multiplying;
  	}
  }

// divide
document.getElementById("divide").onclick = function division(num1, num2){
  //get first number for the variable
  var num1 = document.getElementById('first').value;
  //get the second number
  var num2 = document.getElementById('second').value;
  //equation
  var r = parseFloat(num1) / parseFloat(num2);
  //create the string
  var dividing = num1 + '/' + num2 + '=' + r;
  // if then statement for empty input
  if (num1 == "" || num2 == ""){
  	document.getElementById('result').innerHTML = "Please enter Value"
  } else {
  	//hopefully will return string
  	document.getElementById('result').innerHTML = dividing;
  	}
  }

