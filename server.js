const express = require('express');
const mongoose = require('mongoose');
//const nodemon = require('nodemon');
const dotenv = require('dotenv');

dotenv.config( {  path: './.env'  } );

const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
});

app.get("/", (req, res) => {
    res.send("Hello from main file");
});
//.then(() => console.log("MongoDB is connected"));


app.listen( 5000, () => {
    console.log("Server is running on Port 5000");
});

