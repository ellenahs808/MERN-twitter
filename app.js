const mongoose = require("mongoose");
const express = require("express");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");


const app = express();
const db = require("./config/keys").mongoURI;


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));



app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//if there is a process production port use that, else use 5000
const port = process.env.PORT || 5000;


app.listen(port, () => (console.log(`Listening on port ${port}`)));

