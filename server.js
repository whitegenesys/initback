const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();

app.get('/',(req,res) => {
    res.send('oui');
});

app.post('/',(req,res) => {
    res.send('non');
});

app.put('/',(req,res) => {
    res.send('peut etre');
});

app.delete('/',(req,res) => {
    res.send('peut etre pas');
});

app.listen(port,() => {
    console.log('example app listening on port ${port}')
})