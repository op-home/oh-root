const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

proxy.on("error", (err, req, res, next) => {
    next(err);
});

router.get("/", (req, res, next) => {
    res.send(req.hostname);
});

module.exports = router;
