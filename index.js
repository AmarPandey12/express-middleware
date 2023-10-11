console.log('making external api call in node js');
const { time } = require('console');
const express = require('express');
const currentTime = require('./middleware/currentTime')
const sampleMiddle = require('./middleware/sampleMiddle')
const app = express();
const port = process.env.port || 3000;

module.exports = sampleMiddle;


app.use((req, res, next)=>{
    console.log('introducing middleware one');
    next();
});

app.use(sampleMiddle);

app.use(currentTime);


app.get('/', (req, res)=>{
    res.send('This is my root folder');
    console.log('this is my first default GET request to root');
});

app.listen(port, ()=>{
    console.log(`application is successfully running in port ${port}`);
})