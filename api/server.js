const express = require("express");
const carsRouter = require("../cars/cars-router");

const db = require("../data/config");

const server = express();

server.use(express.json());
server.use("/cars", carsRouter);

module.exports = server;