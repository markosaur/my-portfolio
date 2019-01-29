require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('./'))



app.post("/api/contact", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(4545, () => {
    console.log("Listening on port 4545")
})