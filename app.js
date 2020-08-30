const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const User = require("./models/User");
const bodyParser = require("body-parser");


const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.get("/", (req, res) => {
//     const user = new User({
//         handle: "john",
//         email: "john@test.com",
//         password: "hunter12"
//     })

//     user.save()
//     res.send("Hello World!");
// });

app.use(passport.initialize());
app.use("/api/users", users);
app.use("/api/tweets", tweets);



require("./config/passport")(passport);



//if there is a process production port use that, else use 5000
const port = process.env.PORT || 5000;


app.listen(port, () => {console.log(`Listening on port ${port}`)});

