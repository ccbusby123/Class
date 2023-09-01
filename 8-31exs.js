//Exercise 1
function greet(name) {
  alert("Hello, " + name + "!");
}
greet("John");

//Exercise 2
function multiply (num1, num2) {
return num1 * num2;
}
multiply ( 4,3 )

//Exercise 3
const person = {
  name: "Dave",
  age: "30",
  gender: "male"
};
console.log(person.name);

//Exercise 4
const car = {
  make: "Chevy",
  model: "Bolt",
  year: "2023"
};
console.log(car.make);

//Exercise 5
function reverseString (word) {
return word.split('').reverse().join('')
}
console.log(reverseString("Goodbye"));

//Exercise 6
function calculateArea (radius) {
return Math.PI * radius**2;
};
console.log(calculateArea(5));