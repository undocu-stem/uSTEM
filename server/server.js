const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require(`path`);
// const controlla = require('./controllers/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
console.log(__dirname)
app.use('/', express.static(path.join(__dirname, '../', 'public')));
// app.get('/landing', (req,res) => res.sendFile(path.join(__dirname, '../public2/internship.html')));
app.use(`/landing`, express.static(path.join(__dirname, '../', 'public2')));
// app.get('/image', (req,res) =>  express.static(path.join(__dirname, '../', 'public2')));

const port_number = process.env.PORT || 3001;
app.listen(port_number,() => console.log(`listening ${port_number}`));

// mongoose.connect('mongodb://localhost/undocu', () => {
//     console.log('connected to mongo');
// });
