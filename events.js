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


// 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都被同步地调用。 监听器的返回值会被丢弃。
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('ev', ()=>{
    console.log('触发了ev事件');
});









