const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Successfully connected on port 3000.');
});

app.get('/', (req, res) => {
    res.send({
        name: "shad", // Fixed: Wrapped the string in quotes
        age: 30
    });
});

app.get('/user/:userid-:bookid', (req, res) => {
    res.send(req.params);
});

app.get('/search', (req, res) => { // Fixed: Uncommented the route
    const name = req.query.name; // Moved inside the route
    const age = req.query.age;   // Moved inside the route

    res.send(`Search result for Name: ${name}, Age: ${age}`);
});