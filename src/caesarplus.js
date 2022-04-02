'use strict';
 
module.exports = {
    encrypt,
    decrypt
}


function caesarShift(str, amount) {
    //Help From:https://gist.github.com/EvanHahn/2587465
    if (amount < 0) {
        return caesarShift(str, amount + 26);
    }
    var output = "";
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
}

function encrypt(text) {
    var key = [];
    var encrypted_text = "";
    for (var i = 0; i < text.length; i++) {
        var random_num = Math.floor(Math.random() * 10);
        key.push(random_num);
        encrypted_text = encrypted_text + caesarShift(text[i], random_num);
    }
    return JSON.stringify({ text: encrypted_text, key: key });
}

function decrypt(text, key) {
    var text_output = "";
    for (var i = 0; i < text.length; i++) {
        text_output = text_output + caesarShift(text[i], -Math.abs(key[i]));
    }
    return JSON.stringify({ text: text_output });
}
