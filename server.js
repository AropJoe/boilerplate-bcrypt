'use strict';
const express = require('express');

const bcrypt = require('bcrypt');

const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

/*
app.get('/', (req, res) => {
    res.send("Just a sample site with express.js!")
});
  
app.listen(3030, (err) => {
    if (err) { console.log(err); }
    else { console.log('Server running at http://localhost:3030'); }
});
*/
//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
