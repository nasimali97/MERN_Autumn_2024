var fs = require('fs');

// Read the sampledata.json file
fs.readFile('sampledata.json', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    // Parse the JSON data
    var jsonData = JSON.parse(data);

    // Output the original JSON data to the console
    console.log('Original Sample JSON Data:');
    console.log(jsonData);

    // Create a new variable for the new item
    var newPerson = {
        name: "Alice Brown",
        age: 29,
        company: "New Age Media",
        address: "101 New Avenue, Los Angeles"
    };

    // Add the new item to the JSON data using push method
    jsonData.push(newPerson);

    // Output the updated JSON data to the console
    console.log('Updated Sample JSON Data:');
    console.log(jsonData);

    // Write the updated JSON data to a new file dataset.json
    fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), function(err) {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('New dataset.json file written successfully.');
    });
});
