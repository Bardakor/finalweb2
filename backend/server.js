const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync()

.then(() => {
    console.log("Sync db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

app.get("/", (req, res) => {

    res.json({ message: "Hello EFREI’s Student - Your Server lives!!!"});
});
app.listen(5000, () => {
    console.log("Server has started!")
})