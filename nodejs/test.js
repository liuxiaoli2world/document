// function descendingOrder(n) {
//   //...
//   let s = n + "";
//   let s1 = s
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return s1;
// }

// var i = descendingOrder(65438);
// console.log(i);

// function GetSum(a, b) {
//   //Good luck!
//   if (a === b) {
//     return a;
//   } else {
//     let start, end, sum=0;
//     if (a < b) {
//       start = a;
//       end = b;
//     } else {
//       start = b;
//       end = a;
//     }
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }
//     return sum;
//   }
// }

// console.log(GetSum(2,7));

// function LetterChanges(str) {
//   // code goes here
//   let cs = str.split("");
//   let rs = cs.map(c => {
//     return c.replace(/[a-zA-Z]/g, c => {
//       if (c === "z") {
//         return "a";
//       } else if (c === "Z") {
//         return "A";
//       } else {
//         return String.fromCharCode(c.charCodeAt(0) + 1);
//       }
//     });
//   });
//   return rs.join('').replace(/(['a','i','o','e','u'])/g, (c)=>c.toUpperCase());
// //   return rs.join('').replace(/(['a','i','o','e','u'])/g, $1.toUpperCase());
// }

// // keep this function call here
// console.log(LetterChanges("iodewjio89"));


setTimeout(function(){
  console.log('定时器开始啦');
});

new Promise(function(resolve){
  console.log('马上执行for循环啦');
  for(var i = 0; i < 10000; i++){
    i == 99 && resolve();
  }
}).then(function(){
  console.log('执行then函数啦');
});

console.log('代码执行结束');
