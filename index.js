const express = require("express");
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const path = require('path');
const productRoute = require("./Routes/productRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = process.env.PORT || 8090;

// ejs setup

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.use("/user", userRoute);
app.use("/product", productRoute)

app.listen(port, () => {
    console.log("listening on port 8090")
    dbConnect()
});