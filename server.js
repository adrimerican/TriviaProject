const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const User = require("./client/src/models/users");
const bcrypt = require("bcryptjs");

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

app.post('/Register', async (req, res) => {
    console.log(req.body)
const hashedPassword = await bcrypt.hash(req.body.userPassword, 8);

  
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
      password: hashedPassword,
      admin: checkAdmin
    }); 
    
    user.save();
})


app.post("/login", async (req, res) => {
  const user = await User.find({ email: req.body.userEmail });
  console.log(user);


console.log(req.body.userPassword);
  if (user.length > 0) {
    console.log(user[0].password);
    const isMatch = await bcrypt.compare(
      req.body.userPassword,
      user[0].password
    );
    console.log(isMatch);
    if(isMatch === true){
      res.redirect('/')
    } 
    else {
      res.redirect('/')
    }
  }
 });

app.listen(5000, () => {
  console.log(`Server Is now running at port: 5000`);
});
