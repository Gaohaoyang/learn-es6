// var a = 1
// var b = 2
// var c = 3
//
// //ES6 中允许写成下面这样
// var [a,b,c] = [1,2,3]
//
// console.log(a+b+c);

// let [a, b] = [1]
// console.log(a); //1
// console.log(b); //undefined
//
// let [c, [d]] = [4, [5, 6], 7]
// console.log(c); //4
// console.log(d); //5


// let [foo = true] = [];
// console.log(foo); //true
//
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x2, y2 = 'b'] = ['a', undefined]; // x2='a', y2='b'

// function f() {
//     console.log('aaa');
// }
//
// let [x = f()] = [1];
// // x = 1

// let { foo, bar } = { foo: "aaa", bar: "bbb" }
// foo // "aaa"
// bar // "bbb"

let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
