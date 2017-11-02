let cfg = null;
if(process.env.NODE_ENV === "production") {
    cfg = require("../config/prd.json");
} else {
    cfg = require("../config/dev.json");
}
module.exports = cfg;