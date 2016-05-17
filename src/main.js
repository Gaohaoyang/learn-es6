// if (true) {
//     // TDZ开始
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp); // ReferenceError
//
//     let tmp; // TDZ结束
//     console.log(tmp); // undefined
//
//     tmp = 123;
//     console.log(tmp); // 123
// }
//
// console.log(typeof x);
// typeof x; // ReferenceError
// let x;
//
// // 报错
// function a() {
//   let a = 10;
//   var a = 1;
// }
//
// // 报错
// function b() {
//   let a = 10;
//   let a = 1;
// }

// const PI = 3.1415;
// PI = 3; // 常规模式时，重新赋值无效，但不报错
// console.log(PI) // 3.1415

// const foo;
// foo = 1; // 常规模式，重新赋值无效
// foo // undefined
// 'use strict'
// const foo = Object.freeze({})
//
// // foo.a = 123
//
// console.log(foo);

// global.a = 1;
// a // 1
// console.log(a);
//
// a = 2;
// global.a // 2
// console.log(global.a);

var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
// window.a // 1
console.log(global);

let b = 1;
window.b // undefined
