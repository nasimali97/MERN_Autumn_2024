// Import the 'fs' module
const fs = require('fs');

// Define the name of the directory and file
const dirName = 'newdata';
const fileName = 'newexample.txt';
const fileContent = 'This is some example content for the new file.';

// Step 1: Create a new directory
fs.mkdir(dirName, { recursive: true }, function(err) {
    if (err) {
        console.error(`Error creating directory ${dirName}:`, err);
        return;
    }
    console.log(`Directory '${dirName}' created successfully.`);

    // Step 2: Write a file in the new directory
    fs.writeFile(`${dirName}/${fileName}`, fileContent, function(err) {
        if (err) {
            console.error(`Error writing file ${fileName} in ${dirName}:`, err);
            return;
        }
        console.log(`File '${fileName}' written successfully in '${dirName}'.`);

        // Step 3: Remove the directory
        fs.rmdir(dirName, { recursive: true }, function(err) {
            if (err) {
                console.error(`Error removing directory ${dirName}:`, err);
                return;
            }
            console.log(`Directory '${dirName}' removed successfully.`);
        });
    });
});
