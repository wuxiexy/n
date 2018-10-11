/*
* fs - 文件系统
* document【http://nodejs.cn/api/fs.html】
*
*
* */
const fs = require('fs');

// ============================================================================
// ============================================================================
// 所有的文件系统操作都有异步和同步两种形式。

// 异步形式的最后一个参数都是完成时回调函数。
// 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。
// 如果操作成功完成，则第一个参数会是 null 或 undefined。


// ============================================================================
// ============================================================================
/*
* fs attr
* unlink        删除文件
* unlinkSync    try/catch里面同步删除文件
* rename        修改文件名
* stat          读取/打开 文件流
*
*
*
*
*
* */





// unlink 删除文件
/*fs.unlink('test/hello.txt', (err)=>{
    if(err){
        throw err;
    }
    console.log('成功删除 test/hello.txt');
});*/



// 当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。
/*try {
    fs.unlinkSync('test/hello');
    console.log('successfully deleted file test/hello');
} catch (e) {
    // throw e;
    console.log('尝试删除失败!');
}*/




// 异步的方法不能保证执行顺序。 因为 fs.stat() 操作可能在 fs.rename() 操作之前完成：
/*fs.rename('test/hello.txt', 'test/world.txt', (err) => {
    if (err) throw err;
    console.log('重命名完成');
});
fs.stat('test/world.txt', (err, stats) => {
    if (err) throw err;
    console.log(`文件属性: ${JSON.stringify(stats)}`);
});*/
// 若想按正确的顺序执行操作，则需要把 fs.stat() 放到 fs.rename() 操作的回调函数中：
/*fs.rename('test/world.txt', 'test/hello.txt', (err) => {
    if (err) throw err;
    fs.stat('test/hello.txt', (err, stats) => {
        if (err) throw err;
        console.log(`文件属性: ${JSON.stringify(stats)}`);
    });
});*/






// ============================================================================
// 文件路径
// 大部分 fs 操作接受字符串、Buffer、或使用 file: 协议的 URL 对象作为文件路径。
// 字符串形式的路径会被解释为表示绝对路径或相对路径的 UTF-8 字符序列。
// 相对路径会相对于 process.cwd() 定义的当前工作目录进行处理。

// 使用绝对路径的例子：
/*fs.open('test/file.txt', 'r', (err, fd) => {
    if (err) {throw err;}
    console.log(fd);
    fs.close(fd,(err)=>{
        if (err) {throw err;}
    })
});*/






// 使用 Buffer 定义的路径主要用于将文件路径处理为 opaque 字节序列的特定 POSIX 操作系统。
// 在这种系统上，一个文件路径可能包含使用多种字符编码的子序列。 与字符串路径一样，Buffer 路径也可以是相对的或绝对的。
// 使用绝对路径的例子：
/*fs.open(Buffer.from('test/file.txt'), 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});*/








// ============================================================================
// 支持 URL 对象
// 对于大多数 fs 模块的函数，path 或 filename 参数可以传入 WHATWG URL 对象。 只支持使用 file: 协议的 URL 对象。
const fileUrl = new URL('file:///D:/Users/Desktop/%E5%A4%87%E4%BB%BD.txt');
// console.log(fs.readFileSync(fileUrl));
// file: URL 必须是绝对路径。




