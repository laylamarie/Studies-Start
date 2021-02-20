/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//DATATYPES/
// 1. you can also insert numbers
var myNumber (3)
// 2. you can use strings to complete full sentences using variables and numbers
console.log ("The" +' '+"blue"+ ' '+ "sky")
//Remeber that in strings, spaces are counted as their own character. If you want a space, you can add spaces in front or after the word in the string you can either add them individually //
//3. Booleans are binary variable that has two possible values called "true" or "false"//
boolean itIsHot = False 
boolean itIsCold = True 
//4. Arrays are used to make lists//
var myArray = ['Movie', 'series', 'danganronpa' ]
//5. Functions are reuseable blocks of code tha accept inputs, process those inputs, and returns a new data value//
function name(parameter){
<function body>
<function body>
return statement
}
//6. Undefined properties indicates that a variable has not be aasigned a value, or not declared at all//

//7. Nan properties mean "Not-a-Number".

//8. Infi ity is when a number exceeds 1.797693134862315E + 308. -Infinity wouldbe be the negative value of that.

//9. The difference between primitive/simple datatypes and complex datatypes is how optional they are. Complex datatypes are less optimal than primitive datatypes, complex datatypes contain more than primitive datatypes.

//OPERATORS*/
//1. Assignment operators assign values to its left and operand nased off of the right operand.
x=y
x+=y 
x-=y
x%=y 
x*=y 
x/=y 
//2. Airthemic operators are symbols used to do equations
x + y 
x - y 
x * y 
x / y 
x % y 
//3. Compariso operators are used to compare two values 
x == y //equal
x != y //not equal
x === y //strictly equal 
//4. Logical operators are usually used with logical boolean values. When theyare, it returns a boolean value. When it's used with non -boolean values,  the operators return to non-boolean values.
//|| = OR
//&& = AND
//! = NOT
( x < 11 && y > 1) //true
( x == 3 || y == 3) //false
| ( x == y) //true

/*STRING MANIPULATION*/
//1. With operators
"Sky" === ("Is" + "Blue")
//2. With strings method
"sky" / ( "Is" + "Blue") 

/*CONTROL FLOW*/
//1. If statements that use "If" to check specific condition
if(hour < 1 ){
  greeting = "Good afternoon"
}
console.log ('this code ran')
//.2 Else if statements are if statements that have an additional else statement, which specifies a new condition if first condition is false
if(hour < 1){
  saying = "Good morning"
} else if (hour < 9 ){
greeting = "Good night"
}
//3. else statements that specify a block of code to be executed if the condition is false
if (hour < 1){
  greeting = "Good morning"
 else if (hour < 9)
 greeting = "Good night"
} else {
  greeting = "Good afternoon"
}
/*LOOPS*/
//1. While loops are loops that repeat a specific block of coding, as long as the condidtion is true
while (i < 9) {
  text += "The number is" + i;
  i++;
}
//For loops are loops that repeat a block of coding regardless on true or false
var i;
for ( i = 0; i < red.crayon; i++) {
  text += red[i] + "<br>";
}
//2. Foward counting
for (var myCounting = 0; my counting < 100; myCounting++){
  console.log(Ruler)
}
//Backward Counting 
for (var countingBack = 100; countingBack > 0; countingBack -+) {
  console.log(Metric)
}

/*FUNCTIONS*/
//1. The two stages to using functions are: First you name the function. Next we have to execute a function by naming the parameters. 
//2. A function parameter describes the limit that function can go true. 
//3. The stynax for named function is "function_ name"
//4. How we assign a function to a variable?
var myFunction = function(/"name of function"/){
  //some piece of code
}
//5. You specify the inputs and outputs by adding parameters that state what should and shouldn't be an input or output