const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

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

app.get("/myApi", (req, res) => {
  res.status(200).json({
    "Team1": "Man UTD",
    "Score": "1-6",
    "Team2": "Spurs",
    "Score": "2-4",
  });
});

app.post('/register', (req, res) => {
    console.log(req.body)

    res.status(200).json({
      message: 'User Registered'
    })
})

app.delete('/deleteUser', (req, res) => {
  
})

app.listen(5000, () => {
  console.log(`Server Is now running at port: 5000`);
});
