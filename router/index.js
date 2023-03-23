const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("entrada.html", {
    });
});


router.get('/entrada', (req, res) => {
    const datos = {
        nombre: req.query.nombre,
        NumeroRecibo:req.query.NumeroRecibo,
        tiposervicio: req.query.tiposervicio,
        kilowats: req.query.kilowats,
        domicilio:req.query.domicilio
    };
    res.render('salida.html', datos );

});


router.post("/entrada", (req, res) => {
    const datos = {
        nombre: req.body.nombre,
        NumeroRecibo:req.body.NumeroRecibo,
        tiposervicio: req.body.tiposervicio,
        kilowats: req.body.kilowats,
        domicilio:req.body.domicilio
    };
    res.render("salida.html", datos);


});
router.get("/salida", (req, res) => {
    const datos = {
        nombre: req.query.nombre,
        NumeroRecibo:req.query.NumeroRecibo,

        tiposervicio: req.query.tiposervicio,
        kilowats: req.query.kilowats,
        domicilio:req.query.domicilio
    };
    res.render("salida.html", datos);


    });
    router.post("/salida", (req, res) => {
        const datos = {
        nombre: req.body.nombre,
        NumeroRecibo:req.body.NumeroRecibo,

        tiposervicio: req.body.tiposervicio,
        kilowats: req.body.kilowats,
        domicilio:req.body.domicilio
        };
        res.render("salida.html", datos);
    });

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;