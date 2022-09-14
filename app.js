const mongoose = require('mongoose')
const express = require('express');
const app = express();


const DB = 'mongodb+srv://Gajju:gajendra@cluster0.vyufes3.mongodb.net/ideaLab?retryWrites=true&w=majority'
// middleware

mongoose.connect(DB).then(()=> {
    console.log('connection successful');
}).catch((err) => console.log('No Connection'));



const middleware = (req, res, next) => {
    console.log('hello its middle ware');
    // next();
}

middleware();

app.get('/', (req, res) => {
    res.send('Hello World From the server');
})
app.get('/about', middleware, (req, res) => {
    res.send('Hello World From the About page');
})
app.get('/contact', (req, res) => {
    res.send('Hello World From the contact page');
})
app.get('/login', (req, res) => {
    res.send('Hello World From the login page');
})
app.get('/signup', (req, res) => {
    res.send('Hello World From the contact signup');
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})

