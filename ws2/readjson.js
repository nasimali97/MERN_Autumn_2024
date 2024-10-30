var fs = require('fs');

// Read the sampledata.json file
fs.readFile('sampledata.json', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    // Parse the JSON data
    var jsonData = JSON.parse(data);

    // Task a: Display name, age, company, and address in plain text
    console.log('Plain Text Output:');
    jsonData.forEach(function(person) {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Company: ${person.company}`);
        console.log(`Address: ${person.address}`);
        console.log('---------------------'); // Separator
    });

    // Task b: Display the same data with HTML tags
    console.log('HTML Output:');
    console.log('<div class="people">'); // Opening tag for the people container
    jsonData.forEach(function(person) {
        console.log('  <div class="person">'); // Opening tag for each person
        console.log(`    <h2>${person.name}</h2>`); // Name in an h2 tag
        console.log(`    <p>Age: ${person.age}</p>`); // Age in a p tag
        console.log(`    <p>Company: ${person.company}</p>`); // Company in a p tag
        console.log(`    <p>Address: ${person.address}</p>`); // Address in a p tag
        console.log('  </div>'); // Closing tag for each person
        console.log('  <hr>'); // Horizontal rule for separation
    });
    console.log('</div>'); // Closing tag for the people container
});