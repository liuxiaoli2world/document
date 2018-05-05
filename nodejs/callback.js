// function learn(something) {
//     console.log(something);
// }

// function we(callback, something) {
//     something += ' is cool';
//     callback(something);
// }

// we(learn, 'Nodejs');

// // 匿名函数写法
// we(function(something) {
//     console.log(something)
// }, 'Nodejs');

'use strict';
function print(words) {
  console.log(words);
  console.log(this === global);
  console.log(this);
}

print('...');
