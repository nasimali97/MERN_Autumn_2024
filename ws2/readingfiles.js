// Import the 'fs' module
const fs = require('fs');

// Specify the names of the files you want to read
const file1 = 'example1.txt';
const file2 = 'example2.txt';

// Function to read a file and display its contents
function readFile(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading ${fileName}:`, err);
            return;
        }
        console.log(`Contents of ${fileName}:\n`, data);
    });
}

// Read both files
readFile(file1);
readFile(file2);
