// Import the 'fs' module
const fs = require('fs');

// Specify the names of the files to read
const file1 = 'example1.txt';
const file2 = 'example2.txt';

// Specify the name of the new file to write
const combinedFile = 'combined.txt';

// String to prepend and append
const message = "I wrote this!\n";

// Read both files
fs.readFile(file1, 'utf8', function(err, data1) {
    if (err) {
        console.error(`Error reading ${file1}:`, err);
        return;
    }

    fs.readFile(file2, 'utf8', function(err, data2) {
        if (err) {
            console.error(`Error reading ${file2}:`, err);
            return;
        }

        // Combine the contents of both files
        const combinedData = `${message}${data1}\n${data2}\n${message}`;

        // Use fs.appendFile to add to the existing combined.txt
        fs.appendFile(combinedFile, combinedData, function(err) {
            if (err) {
                console.error(`Error appending to ${combinedFile}:`, err);
                return;
            }
            console.log(`Combined data appended to ${combinedFile} successfully.`);
        });
    });
});
