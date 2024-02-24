const express = require("express");
const router = express.Router();

const products = [];

router.get("/", (req, res) => {
    res.json(products);
})

router.post("/", (req, res) => {
    const nuevoProducto = req.body;
    users.push(nuevoProducto);
    res.send({status:"success", message: "Producto creado correctamente!"});
})

module.exports = router;