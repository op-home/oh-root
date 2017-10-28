const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

proxy.on("error", (err, req, res, next) => {
    next(err);
});

router.get("/", (req, res, next) => {
    switch (req.query.pto) {
        case "mon":
            proxy.web(req, res, { target: "http://127.0.0.1:4000" });
            break;
        default:
            res.render("index", {title: "Express"});
    }
});

module.exports = router;
