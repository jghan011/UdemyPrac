/////////basic operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Mayj operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now + 2);
// console.log(now / 10);

// ///
var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
// // print false
// var johnOlder = ageMark > ageJohn;
// console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof age);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x += 2;

console.log(x);

/// if else

var firstName = "John";

var civilStatus = "married";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log;
}

var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + "drink beer. ")
  : console.log(firstName + "drinks juice.");

var drink = age >= 18 ? "beer" : "juice";

///////////////
///////////
///// FUNCTION ///////

function calulateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calulateAge(1990);
var ageMike = calulateAge(1948);
var ageJane = calulateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calulateAge(year);
  var retirement = 65 - age;
  console.log(firstName + " retires in " + retirement + " years.");
}
yearsUntilRetirement(1990, "John");

///////  ARRAYS   ////////

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
