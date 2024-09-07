const express = require('express');

const app = express();
const fs = require('fs');
const path = require('path');

app.get('/create', (req, res) => {
    const d = new Date();
    const dateTime = `Date: ${d.toLocaleDateString()} and Time: ${d.toLocaleTimeString()}`;

    fs.writeFile('./files/date-time.txt', dateTime, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('File created successfully');
        }
    })
});

app.get('/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'files');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(files);
        }
    })
})

app.listen(3002, 'localhost', () => {
    console.log('Server is running on http://localhost:3002');
});
