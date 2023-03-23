const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");

const misRutas = require("./router/index");
const path = require("path");

const app = express();

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);

app.use(misRutas);


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/error.html");
});


const puerto = 3500;
app.listen(puerto, () => {
    console.log("Iniciando Puerto Del recu Examen Corte 2");
});