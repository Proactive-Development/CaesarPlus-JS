# <img src="https://raw.githubusercontent.com/Proactive-Development/Logos/main/CaesarPlus/CaesarPlusJS.png" width="50px"/> CaesarPlus For Javascript
An advanced caesar cypher javascript module

[Click Here to go to python version](https://github.com/Proactive-Development/CaesarPlus)
## What is CaesarPlus
CaesarPlus is a advanced caesar cypher JavaScript module that is more secure than caesar cypher 

It makes a unique encryption every time you encode a piece of data.

## Setup


```bash
npm i CaesarPlus-JS
```
### Frontend/HTML
To use CaesarPlus on a website you can include the script in the body of the html file.

```html
<script src="https://raw.githubusercontent.com/Proactive-Development/CaesarPlus-JS/main/src/web/caesarplus.js" async></script>
```

### Nodejs
Download the repo and place the repo in the node_modules folder.

Or use the quick install script

```bash
mkdir node_modules && cd node_modules && wget https://github.com/Proactive-Development/CaesarPlus-JS/archive/refs/heads/main.zip && unzip main.zip && rm main.zip && mv CaesarPlus-JS-main CaesarPlus 
```

## Usage

### Frontend/HTML

To encode a piece of data you can use the encode function.

```js
//You must include the script in the body of the html file.
var encrypted = encrypt("Hello World!"); //Encrypt the data
//Now lets output the encrypted data
console.log(JSON.parse(encrypted).text); //This is the text
console.log(JSON.parse(encrypted).key); // This is the decryption key
```
To decode a piece of data you can use the decode function. The key must be correct to decode the data.

```js
//You must include the script in the body of the html file.
console.log(decrypt(text, key));
```


### NodeJS
To encode a piece of data you can use the encode function.

```js
const caesarplus = require('caesarplus'); //First import the module
var encrypted = caesarplus.encrypt("Hello World!"); //Encrypt the data
//Now lets output the encrypted data
console.log(JSON.parse(encrypted).text); //This is the text
console.log(JSON.parse(encrypted).key); // This is the decryption key
```
To decode a piece of data you can use the decode function. The key must be correct to decode the data.

```js
const caesarplus = require('caesarplus'); //First import the module

console.log(caesarplus.decrypt(text, key));
```


