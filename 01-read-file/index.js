const path = require('path');
const readFile = path.join(__dirname, 'text.txt');
const fs = require('fs');
const stream = fs.createReadStream(readFile, 'utf-8');
let result = '';
stream.on('data', function(part){
    result += part
});
stream.on('end', function() {
    console.log(result)
});