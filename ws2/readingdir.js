// Import the 'fs' module
const fs = require('fs');

// Specify the directory you want to read
const directoryPath = '.'; // This refers to the current directory

// Use fs.readdir to read the contents of the directory
fs.readdir(directoryPath, function(err, files) {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Contents of the directory:');
    files.forEach(file => {
        console.log(file);
    });
});
