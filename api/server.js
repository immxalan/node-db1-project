const express = require("express");

const accountRouter = require("./account-router")

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRouter)

server.get("/", (req, res) => {
    res.status(200).json("Server is online")
})
module.exports = server;
