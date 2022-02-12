const express = require("express");
const mongoose = require("mongoose");

const app = express();

// make connection to db
mongoose.connect('mongodb://localhost:27017/vitalityDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());
app.use('/api', require("./api/api"));

// app.use((err, req, res, next) =>{
//     res.status(422).send({error: err.message});
// });

// app.get("/api", (req, res) => {
//     res.send("<h1>Backend Working</h1>");
// });

app.listen (process.env.port || 4000, () => {
    console.log("Listening on http://localhost:4000");
})
