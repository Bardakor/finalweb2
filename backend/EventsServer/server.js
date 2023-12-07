const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
// server works for any request 
// or app.use(cors({ origin:http://localhost:8080 })); 
//if you want to allow the handling of requests sentfrom the frontend app from the address localhost:8080.

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello EFREI’s Student - Your Server lives!!!"});
});

app.listen(5000, () => {
    console.log("Server has started!")
});
