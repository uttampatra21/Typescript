// ----------------TYPESCRIPT----------------

// -------------------------------//
// ========= Chapter 1 ===========//
// -------------------------------//
//! 1. What is TypeScript ?

//📦TypeScript is a Superset of JavaScript. Thats adds static typing and other features to to enhance JavaScript developmemt. It was developed by Microsoft on Oct 2012.

//📦TypeScript is a superset of JavaScript which means any valid Typescript code is also valid Javascript code.

// --------------------   ADVANTAGES  -------------------- //
// --------------------   ADVANTAGES  -------------------- //

// 🎁Exp : Easier To Read  //
// -------------  JavaScript-------------//

// let fName = "Uttam";
// fName = 123;
// fName = true;
// console.log(fName);
// The out put will be true. BCZ JavaScript is a dynamical Language

// ----------- TypeScript--------------//

// let fName: string = "Uttam";
// fName = 121;
// fName = true;
// console.log(fName);
// The output will be Error. BCZ of typeinfarence [TypeScript is awesome]

// 🎁Exp : Easier To Write  //

// Typeinfarence [TypeScript is awesome] makes TypeScript easier to write.

// 🎁Exp : Easier To Maintain  //

// -------------------------------//
// ========= Chapter 2 ===========//
// -------------------------------//

// ----------------Excercise-------------//
// 1.   Write a proggrame to add two number ?
// 1.   How catch error and slove it ?
// 1.   TS Configuration file ?

//* 1. ANS ::------
const addNumber = (a: number, b: number) => {
  let sum = a + b;
  console.log(sum);
};
addNumber(12, 23);
