
//Every statement in javascript must end in a semicolon. it does not effect the code in any way at all but is very helpful to indicate the end of a statement.

//this is a variable thats is defined using a string datatype
var food= "hotdogs";

/*This that you see here is
a multi-line comment that is
used for writing short notes
on what needs to corrected or
what the person wants to focus
on next in their project. Mainly used to cancel out large texts of programming in the javascript of a html document for later correction*/

//this is a single line comment using 2 forward slashes to write short notes


//This is an alert tag that is used to send a message to the user when they have entered the website
alert('This is an alert');



var one=1;
var two=2;
//This is the console commnd that is used for printing out javascript text into the command cosole window. It allows the programmer to test their javascript to make sure it is functional. The console command window must be open to print out anything.
console.log(one+two);

//There are a few basic data types. "String" is just text that is closed using double-air quotes(ex. "Hello")."Number" is just numbers (ex. 1,2,3)."Boolean" is a data type that only has two values, true or false, and is mainly used in programming for comparison with different data types using an operator. (ex. "1>5 //returns false" The ">"is the operator)."Undefined" is the result if a variable or value in the javascript of a website is not defined with a data types.

//Another form of data type is the "Array" and this one allows for multiple data tyes to be stored within it and can be stored inside of variables. It uses normal brackets to enclose the data types and commas inside of it to differentiate each data type(ex.["hello",20,"hotdogs",40]).

var random=["hello",20,"hotdogs",40];
console.log(random);

//If a programmer wishes to test their javascript, they must open the command console window on their webpage/website by either inspecting element and clicking on the console tab or pressing the keys "cntrl+shft+I" and must write the "console.log" command after the  javascript they wish to test to print out the results of the javascript into the console command window.This is mainly used for testing out javascript to see if it works and correct any errors.

var stuck=["luck","muck","chuck"]
console.log(stuck)

//Logic in JavaScript involves the use of comparison operator such as !=(not equal), ==(equal to),===(equal value and type),>,<,>=, and <=.

//Functions are used to carry out more complicated instructions.

function addNumber(numberOne, otherNumber){
  return numberOne +otherNumber;
}
console.log(addNumber(4,5))
//This function is basically saying to add the two data types shown. The only problem is that the numberOne and other number aren't defined. You can define them in the console.log command like so:                    console.log(addNumber(4,5));


function friend(){
  friend=("mik");
  document.getElementById('el').innerHTML=friend;
}
//Click on "Curtain 1" to change it to mik with the above function. By getting the element with the id "el", I can change the text to "mik" by clicking on it.

function Half(first, second){
  return first/second;
}
console.log(Half(20,10));
//This function returns the input as the first number beng divided by the second number and prints it to the console.



