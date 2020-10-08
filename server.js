const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const User = require("./client/src/models/users");

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(bodyParser.json())

const users = mongoose.model('users')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Is now connected."));

app.get("/", (req, res) => {
  res.send("Hello from NodeJS");
});

app.post('/register', (req, res) => {
    console.log(req.body)
  
    res.status(200).json({
      message: 'User Registered'
    })
    let checkAdmin = false;
    if (req.body.userAdmin) {
      checkAdmin = true;
    } else {
      checkAdmin = false;
    }

    const user = new User({
      name: req.body.userName,
      email: req.body.userEmail,
      password: req.body.userPassword,
      admin: checkAdmin
    }); 
    
    user.save();
})



app.listen(5000, () => {
  console.log(`Server Is now running at port: 5000`);
});
