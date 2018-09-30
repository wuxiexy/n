/*
* document【http://nodejs.cn/api/events.html#events_class_eventemitter】
*
*
* */

// events (事件)


// 大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，
// 其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。
// 所有能触发事件的对象都是 EventEmitter 类的实例。
// 这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。


// ******************************************************************************************************
// 当 EventEmitter 对象触发一个事件时，【所有绑定在该事件上的函数都被同步地调用】。 监听器的返回值会被丢弃。
// ******************************************************************************************************


const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}


// 实例化 事件对象
const myEmitter = new MyEmitter();


// eventEmitter.on() 方法用于注册监听器，
myEmitter.on('ev', ()=>{
    console.log('触发了ev事件');
});


// eventEmitter.emit() 方法用于触发事件。
myEmitter.emit('ev');



// 给监听器传入参数与 this，
// this 指向 EventEmitter 实例 => myEmitter
myEmitter.on('event', function(a, b) {
    console.log(a, b, this);
});
myEmitter.emit('event', 'a', 'b');  // 只会执行前面的 event 事件，后面定义的event不会执行，所以这里执行一次


// 也可以使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例：
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.emit('event', 'a', 'b');  // 这样会执行绑定的事件 event，所以这里执行两次












