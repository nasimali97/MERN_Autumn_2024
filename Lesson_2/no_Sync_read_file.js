var fs = require('fs');

console.log('Going to read the file');
fs.readFile('example.txt', function(err, data){
    if(err)
        console.log(err);
    console.log(data.toString());
});

for (var i = 0; i< 5; i++){
    console.log("loop text " + i);
}