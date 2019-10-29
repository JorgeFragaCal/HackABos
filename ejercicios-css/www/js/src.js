"use strict";

//----------------CALCULADORA-----------------------//
function sum(num1, num2) {
  return num1 + num2;
}
function rest(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function split(num1, num2) {
  return num1 / num2;
}

let num1 = prompt("Numero 1");
let num2 = prompt("Numero 2");

console.log("SUMA : ", sum(parseInt(num1), parseInt(num2)));
console.log("RESTA : ", rest(num1, num2));
console.log("MULTIPLICACION : ", multiply(num1, num2));
console.log("DIVISION : ", split(num1, num2));

//------------------REGISTRO ACADEMICO--------------//

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  showPerson(person) {
    console.log(person.name + " " + person.age + " " + person.gender);
  }
}
//CREAR PERSONAS
let person = new Person("Jorge", 22, "male");
let person2 = new Person("Manuel", 23, "male");
let person3 = new Person("Agustin", 34, "male");
let person4 = new Person("Santiago", 32, "male");
let person5 = new Person("Pedro", 63, "male");

//MOSTRAR PERSONA
person.showPerson(person);
//--------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
    this.studentList = [];
  }
  //AÑADIR ESTUDIANTE
  addStudent(student) {
    this.studentList.push(student);
  }
}
//CREAR PROFESORES
let teacher = new Teacher("Roberto", 30, "male", "HTML");
let teacher2 = new Teacher("David", 28, "male", "JavaScript");
let teacher3 = new Teacher("Juan", 37, "male", "CSS");
//-------------------------------------------------------------
let student;
class Student extends Person {
  constructor(name, age, gender, course, group) {
    super(name, age, gender);
    this.course = course;
    this.group = group;
  }
  static newStudent(person, course, group) {
    student = new Student(
      person.name,
      person.age,
      person.gender,
      course,
      group
    );
    //console.log(student);
  }
}
//CREAR ESTUDIANTES Y ASIGNARLES PROFESOR
Student.newStudent(person, 1, "A");
teacher.addStudent(student);
Student.newStudent(person2, 1, "B");
teacher2.addStudent(student);
Student.newStudent(person3, 1, "B");
teacher2.addStudent(student);
Student.newStudent(person4, 1, "A");
teacher3.addStudent(student);
Student.newStudent(person5, 1, "A");
teacher3.addStudent(student);

console.log(teacher, teacher2, teacher3);

//------------------DADO ELECTRONICO---------------------------

function rollDice() {
  let gameOver = 0;
  while (gameOver < 50) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    gameOver = gameOver + dice;
    console.log("Dado : " + gameOver);
  }
  console.log("TERMINADO");
}
rollDice();

//------------------ARBOLES---------------------//
let array = [5, 2, 6, 1, 9, null, 8, null, null, null, null, 4, null];
let array2 = [];
let nodo = 0;
for (let i = 0; nodo < array.length; i++) {
  if (array[i] !== null) {
    nodo = 2 * i + 1;
    array2.push(array[i]);
    console.log("DERECHA", nodo);
  } else {
    nodo = 2 * i + 2;
    console.log("IZQ", nodo);
  }
}
console.log(array2);
