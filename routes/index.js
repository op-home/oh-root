const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const cfg = require("../utils/config");

proxy.on("error", (err, req, res, next) => {
    next(err);
});

router.get("/", (req, res, next) => {
    switch (req.hostname.replace(`.${cfg.server.host}`, "")) {
        case "api":
            proxy.web(req, res, cfg.api);
            break;
        case "mon":
            proxy.web(req, res, cfg.monitor);
            break;
        case "doc":
            proxy.web(req, res, cfg.document);
            break;
        default:
            res.render("index");
    }
});

module.exports = router;
