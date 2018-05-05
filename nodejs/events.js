var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
// 默认同一个事件可以添加10个监听器，可以修改
life.setMaxListeners(11);

function water(who) {
  console.log('给' + who + '倒水');
}

life.on('confort', water);

life.on('confort', function(who) {
  console.log('给 ' + who + ' 2');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 3');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 4');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 5');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 6');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 7');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 8');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 9');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 10');
});

life.on('confort', function(who) {
  console.log('给 ' + who + ' 11');
});

life.on('loved', function(who) {
  console.log('给 ' + who + '买衣服');
});

life.on('loved', function(who) {
  console.log('给 ' + who + '买吃的');
});

// 看是否添加了监听
var hasConfort = life.emit('confort', '亲爱的老公');
var hasLoved = life.emit('loved', '亲爱的老婆');
var hasPlayed = life.emit('played', '老公老婆');

console.log(hasConfort);
console.log(hasLoved);
console.log(hasPlayed);

// 移除事件
life.removeListener('confort', water); //注意：匿名函数不能被删除掉

// 查看监听的数量
var length0 = life.listeners('confort').length;
var length00 = EventEmitter.listenerCount(life, 'confort');
console.log(length0);
console.log(length00);

// // 移除所有的事件监听
// life.removeAllListeners();
// // 查看监听的数量
// var length = life.listeners('confort').length;
// console.log(length); // 0
// var length1 = life.listeners('loved').length;
// console.log(length1); // 0

// 移除事件监听
life.removeAllListeners('confort');
// 查看监听的数量
var length = life.listeners('confort').length;
console.log(length); // 0
var length1 = life.listeners('loved').length;
console.log(length1); // 2