// // Создание переменной с помощью "var"
// var name = "Nastya";
// var myMessage = "Сообщение";
// var myNumber = 5;
// var myString = "";
// var myBoolean = true; //false   правда или ложь
// var myNull = null // у переменной присвоено значение но оно равняется пустоте

// // Создание переменной с помощью "let"
// let catName = "Вася";
// let dogName = "Бобик";
// let myBoolean = true; //false правда или ложь
// let myUnderfined = underfined; // y переменной значение отсутствует

// // Создание объекта
// let myObject = {
//   name: "Вася",
//   age: 25
// };

// let car = {
//   color: black,
//   steering: round  
// };


// var name = {
//   name: "Ваня",
//   heigсht: 180,
//   age: 23,
//   weight: 85
// }
// // alert ****это всплывающие окно****
// alert("Списать все деньги");
// alert("Аеееееееее!!");
// alert("Кот-фрокот");
// alert("Бесконечныыыыыыыыыыый привет");
// alert("ToToWe".slice(-2));

// Функции - это какое-то либо количество инструкций, кусок кода которое определяется один раз и потом может быть вызван много раз
// return - вернуть нашу функцию
// //** функции** function выражение(аргументы){
//  return выражение
// }

// function greet(name) {
//   return "Hello" + name
// }
// // индефикатор (аргументы)
//  console.log(greet("Sorax"));

// var func = function(callback) {
//   var name = "Sorax";
//   callback(name);
// };

// func(function(n) {
//   console.log("Hello" + n);
// });

//  var func = function() {
//    return function(){
//      console.log("Hi");
//    }
//  };
// func()();

// var greeting = (function(name) {
//   return "Hello" + name;
// } |("sorax"));
// console.log(greeting);

// Область видимости переменной  - это часть программы где переменная определенна и доступна, делятся на глобальные и локальные. Глобальные называются все переменные  объявленные вне какой-либо функции.
// Переменные  объявленные внутри функции являются локальеными.

// alert("h1");
// function f1(){
//   alert("Вы нажали кнопку");
// }

// function anonym() {
//   console.log("we frends");
// };
// anonym();

// function carRiders() {
//   console.log()
// }
// function sayHello(firstName = "Default", lastName = "Default") {
//   console.log(firstName, lastName);
//   console.log("hello world");
//   return 'Hello ${firstName} ${lastName}';
// }

// function displayResault() 
// {
//   var length = document.getElementById('length').value;
//   var width = document.getElementById('width').value;
//   var height = document.getElementById('height').value;

//   document.getElementById('result').innerHTML = length * width * height;
// }

// Циклы** это ещё один вид инструкции и они нужны для многократного повторения каких то отдельных видов инструкций
// for (инициализация; тест истина или ложь; инкримент проверяем счётчик) тело цикла(является составной инструкцией, но может быть обычной инструкцие и даже пустой)
// Инкремент ++ увеличивает на 1
// Декремент -- уменьшает на 1
// var i;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// var i;
// for (i = 10; i--;) {
//   console.log(i);
// }


// Цикл while(выражение) инструкция
// var i = 10;
// while (i--) {
//   console.log(i);
// }

//  Цикл do инструкция while(выражение)
// var i = 0;
// do console.log(i++); while (i < 10)



//  let res = sayHello("Nastya", "Smirnova");
//  let res2 = sayHello("Ivan", "Smirnov") ;
// let res3 = sayHello(null);
// console.log(res3);
// var number = 3;
// console.log(number);
// number = 6;
// console.log(number);
// function home() {
//   var name = number = 9;
//   console.log(name);
// }
// home();
// console.log(number);
// let a, b;
//  a = 2;
//  b = 4;
// console.log(a+b);
// let a = b = 20;
// console.log(a+b)
// let a = 2;
// let b = 4;
// let c = 10;

// console.log(a);
// console.log(b);
// // b = c;
// // console.log(a + b);


// if(car.color == 'red') {
//     console.log('Автомобиль красный');
// }else if(car.color == 'green') {
//     console.log('Автомобиль зелёный');
// }else{
//     console.log('Цвет не определён');
// }

// if(!false) {
//     console.log('Истина');
// }else{
//     console.log('Ложь');
// }
