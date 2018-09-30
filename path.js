const path = require('path');

console.log(__dirname,1);
console.log(path.resolve(),123);
var a = file => path.resolve(__dirname, '../', file);
console.log(a('aa'));
