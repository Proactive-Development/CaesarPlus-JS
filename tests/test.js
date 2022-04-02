const caesarplus = require('../src/caesarplus');
var encrypted = caesarplus.encrypt("Hello World!");
console.log(JSON.parse(encrypted).text);
console.log(JSON.parse(encrypted).key);
console.log(caesarplus.decrypt(JSON.parse(encrypted).text, JSON.parse(encrypted).key));
