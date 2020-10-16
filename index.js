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

// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// Different data types

// var john = ["John", "Smith", 1990, "teacher", false];

// john.push("blue"); //puts it at the end of the array
// john.unshift("Mr."); //at the begining of the array
// john.shift(); //removes first element
// // john.pop(); //remove last Element
// console.log(john);
// console.log(john.indexOf(1990)); //will return which position it appears in the array

///objects and properties
//Object literals
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john);
// dot notation to access each property
// you can also use bracket notation to retreive
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]); //wil now print 1990

//create
var jane = new Object(); //creates new empty object
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
.//now you will see the object and it's properties
