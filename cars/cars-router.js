const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {

    try {
        const cars = await db("cars");
        res.json(cars);
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params // why is this not req.params.id
        const cars = await db("cars").where({ id });

        res.json(cars)
    } catch (err) {
        next(err);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const carData = req.body;
        const [id] = await db("cars").insert(carData);
        const newCar = await db("cars").where({ id });

        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
})


router.delete("/:id", async (req, res, next) => {

    try {
        const { id } = req.params;
        const cars = await db("cars").where({ id });
        res.json(cars);
    } catch (err) {
        next(err);
    }
})

module.exports = router;