const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/items');

const app = express();

const port = process.env.PORT || 5000;

const db = 'mongodb+srv://savchak181998:savchak2913422@savmeat.2gt2m6n.mongodb.net/savmeat?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then((res) => console.log('connected to db'))
    .catch((error) => console.log(error));


app.listen(port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${port}`);
});


app.get('/express_backend', (req, res) => {
    Item
        .find()
        .then((items)=>
            res.send(items))

})