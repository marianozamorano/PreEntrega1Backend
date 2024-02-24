const express = require("express");
const router = express.Router();

const carts = [];

router.get("/", (req, res) => {
    res.json(carts);
})

router.post("/", (req, res) => {
    const nuevoCarrito = req.body;
    carts.push(nuevoCarrito);
    res.send({status: "success", message: "Carrito creado correctamente!"});
})

module.exports = router;