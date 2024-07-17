const express = require("express");
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = process.env.PORT || 3000;

// ejs setup

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view"));
app.use(express.static("public"))



app.use("/user", userRoute);

app.listen(port, () => {
    console.log("listening on port 8090")
    dbConnect()
});