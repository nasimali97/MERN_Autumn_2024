var fs = require('fs');

// Read the dataset.json file
fs.readFile('dataset.json', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    // Parse the JSON data
    var jsonData = JSON.parse(data);

    // Output the original JSON data to the console
    console.log('Original JSON Data:');
    console.log(jsonData);

    // Delete the item with name "Alice Brown"
    jsonData = jsonData.filter(person => person.name !== "Alice Brown");

    // Output the updated JSON data to the console
    console.log('Updated JSON Data after deletion:');
    console.log(jsonData);

    // Write the updated JSON data back to dataset.json
    fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), function(err) {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Item deleted successfully and dataset.json updated.');
    });
});
