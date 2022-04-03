const caesarplus = require('../src/caesarplus');
test('Encode Hello World ', () => {
    var encrypted = caesarplus.encrypt("Hello World!");
    if(JSON.parse(encrypted).text == "Hello World!") {
        fail("Encryption failed");
    }
});   
test('Decode and encrypted message', () => {
    var encrypted = caesarplus.encrypt("Hello World!");
    var decrypted =caesarplus.decrypt(JSON.parse(encrypted).text, JSON.parse(encrypted).key);
    if(JSON.parse(decrypted).text != "Hello World!") {
        fail("Decryption failed");
    }
});