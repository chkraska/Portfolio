/*Tworzenie tabeli(array)
let arr = ["przykład1", "przykład2"];

arr[2] = "przykład3";

alert(arr);
alert(arr.length);
//użycie "at"
alert(arr.at(-1));
*/

/* Check for spam exercise
function checkSpam(str){
 let lowerStr = str.toLowerCase();

 return lowerStr.includes("viagra") || lowerStr.includes("xxx");
};
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/

/*Uppercase the first character
function ucFirst(str){
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};
alert(ucFirst("john"));
*/
/*
//slice, substring, substr.
let str = 'stringify';
alert(str.slice(0, 5));//strin not include 5
alert(str.slice(-4, -1))//gif (od końca)

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)


alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
*/

/* Duże i małe litery.
alert("duże".toUpperCase() ); //DUŻE
alert("MAŁE".toLowerCase()); //małe
alert("literka"[0].toUpperCase()); // L
*/
//------------------------------Strings----------
/* Multipile lined string using `` (Backticks)
let guestlist = `Guests:
*John
*Pete
*Mary
`;
alert(guestlist);





//-----------------------------------------------
/*A random number from min to max
function random(min, max){
return min + Math.random() * (max - min);
}
alert(random(1, 5));

alert(random(1, 5));

alert(random(1, 5));

*/
/* Repeat until the input is a number

function readNumber(){

  let num;
  do{
  num = prompt("Please enter number", 0);
  }while( !isFinite(num));
  
  
  if (num === null || null === "")return null;

  return +num;

};

alert(`Read: ${readNumber()}`);

*/

/* Funkcja Math. w liczbach
alert(Math.random());
alert(Math.max(1, 3 , 89, 100, 2002, 1023, 33333));
alert(Math.min(1,34,5));
alert(Math.pow(2, 5));
*/

/* 
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
*/

/* -----------------NUMBERS------------------- 
let million = 1e6;

alert(million);//1000000

let mcs = 1e-6;

alert(mcs);//0.000001

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
--------------------------------------------------------------
*/

/*symbol in objects
let user = {
  name: "John"
};

let id = Symbol("id");


user[id] = 1;

alert( user[id]);
*/
/* Accumlator który dodaj do 1 liczby wybraną ilość liczb i liczbe
function Accumulator(startingValue){
this.value = startingValue;
  this.read = function(){
    this.value += +prompt("How much you want to add?", 0);
  };
};


let accumulator = new Accumulator(1); // initial value 1

accumulator.read();
accumulator.read();


alert(accumulator.value);
*/

/*kalkulator z użyciem konstruktora ez
function Calculator(){
  this.read = function(){
  this.a = +prompt("a?", '0');
  this.b = +prompt("b?", '0');
  };
  this.sum = function(){
    return this.a + this.b;
  };
  this.mul = function(){
    return this.a * this.b;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );
*/

/*Przykład konstruktora z "new"
function Person(name, age){
  this.name = name;
  this.age = age;
  this.sayHello = function(){ //przykład metody w kontsruktorze
    alert('Hello my name is '+this.name + "and this is my age " + this.age);

  }
};
//użycie kontstruktora to tworzenia nowego obiektu
const person1 = new Person("Chris", 23);
const person2 = new Person("Karolina", 21);

alert(person1.name + ' ' + person1.age);
alert(person2.name + ' ' + person2.age);
alert("Te dwie osoby bardzo się kochają <3")
*/

/* zadanko które pozwala wyowołać funkcje w jednej lini.
let ladder = {
 step: 0,
 up(){
  this.step++;
  return this;
 },
 down(){
  this.step--;
  return this;
 },
 showStep(){
  alert( this.step );
  return this;
 }
};  
ladder.up().up().down().showStep().down().showStep();
*/

/* Prosty kalkulator z Objects i method this.
let calculator = {
  read(){
    this.a = +prompt('a?','0');
    this.b = +prompt('b?','0');
   },
 sum(){
  return this.a + this.b;
 },
 mul(){
  return this.a * this.b;
 },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/* zastowsowanie metody this w strzałkowiej funkcji
let user = {
  firstName : "Lydia",
  sayHi(){
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi();
*/

/* Object z użyciem metody 'This'.
let user = {
  name: "Piotr",
  age: 21,

  sayHi(){ //Functions that are stored in object properties are called “methods”.

  alert(this.age);
//The value of this is defined at run-time.
  }
};

user.sayHi();
*/

/*TO SAMO CO NIŻEJ TYLKO O WIELE KRÓTSZE!!!
user = {
  sayhi() {
    alert("Hello!!");
  }
};

user.sayhi();
*/

/* Długa wersja wywoływania metody.
let user ={
  name: "Chris",
  age: 23
};

//zadeklarowanie funkcji
function sayHi(){
  alert("Hello!!");
}
//dodanie jej jako metody
user.sayHi = sayHi;

user.sayHi();//hello!!

*/

/* klonowanie za pomocą structuredClone aby klonowac nested objects.
let user = {
  name: "Chris",
  age: 23,
  sizes: {            // nested object
    height: 180,
    width: 50
  }
};

let clone = structuredClone(user);

user.sizes.width = 60;
alert(clone.sizes.width);
alert(user.sizes.width);
*/

/*Dołączanie za pomocą Object.assign do objectu.

let user = {
  name: "Chris",
  age: 23
};

let permissions1 = { canView: true};
let permissions2 = { canEdit: true};

Object.assign(user, permissions1, permissions2);

alert(user.canEdit);
alert(user.name);

// Nadpisuje również poprzednie value.
Object.assign(user, {name: 'Kris'});

alert(user.name)// Kris
*/

/* Funkcja która mnoży przez 2 tylko numeryczne values w objekcie
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){
  for (let key in obj){
   if( typeof obj[key] == 'number'){
    obj[key] *= 2;
   }
  }
}

multiplyNumeric(menu);

console.log(menu);
after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

/* suma cyfr w objekcie oraz zwraca 0 gdy jest pusty
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries){
  sum += salaries[key];
}

alert(sum);
*/

/* Object with for loop
let user = {
  name: "Chris",
  age: 23,
  isAdmin: true,
};

for (let key in user){

  alert( key );
  alert(user[key]);
}
*/

/* Zastosowanie function w objects
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user = makeUser('John', 30);
alert(user.name);

console.log("lastname" in user);
console.log("age" in user);
*/

/* Objects przykład z promptem
let user = {
  name: "Chris",
  age: 23,
  isAdmin: true,
};

let key = prompt(' What do you want to know about user?','name')


alert(user[key]);
*/

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt ("x?",'');
// let n = prompt ("n?",'');

// if (n <= 0) {
//   alert (`Power ${n} is not supported,
//    please enter an integer number greater than zero`);
// } else {
//   alert ( pow(x, n) );
// }

/*function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () =>  alert("You agreed."),
    () => alert("You canceled the execution.")
  );
*/

/* Pokaz najmniejsza wartość
function showMinValue(a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

let result = showMinValue(-5, 10);
console.log(result)
*/

/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age){
    return (age >18) || confirm('Did parents allow you?');
}
*/

//zamiana z swtich to if
/*  let browser = prompt('Enter a browser you are using');

  if(browser === 'Edge'){
    alert('You are using Edge');
  }
  else if(browser === 'Chrome'|| browser === 'Safari' || browser === 'Firefox' || browser === 'Opera'){
    alert("Okay we support these browsers too");
  }
  else{
    alert ("We hope that this page looks okay!");
  }*/

//zamiana z if na switch
/*  let a = +prompt('a?','');

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert(0);      
  }
  */
