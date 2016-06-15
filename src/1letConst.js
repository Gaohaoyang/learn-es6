// {
//     let a = 10;
//     var b = 1;
// }
// console.log(a) // ReferenceError: a is not defined.
// console.log(b) // 1
//
// for (let i = 0; i < array.length; i++) {
//     //...
// }
// console.log(i) //ReferenceError: i is not defined.

// console.log(a);
// console.log(b);
//
// var a = 1
// let b = 2

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

// 报错
// function a() {
//     let a = 10;
//     var a = 1;
// }
//
// // 报错
// function b() {
//     let a = 10;
//     let a = 1;
// }


// let a =10
// if (true) {
//     console.log(a);
// }

// const PI = 3.1415;
// PI = 3; // 常规模式时，重新赋值无效，但不报错
// //但是我在Chrome下运行报错了，错误如下
// //Uncaught TypeError: Assignment to constant variable.
// console.log(PI); // 3.1415

// const foo = {};
// foo.prop = 123;
//
// console.log(foo.prop) // 123
//
// foo = {}; // TypeError: "foo" is read-only

var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined

f
