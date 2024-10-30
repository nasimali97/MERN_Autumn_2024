// Import the 'fs' module
const fs = require('fs');

// Specify the name of the file to delete
const fileToDelete = 'combined.txt';

// Use fs.unlink to delete the file
fs.unlink(fileToDelete, function(err) {
    if (err) {
        console.error(`Error deleting ${fileToDelete}:`, err);
        return;
    }
    console.log(`${fileToDelete} has been deleted successfully.`);
});
