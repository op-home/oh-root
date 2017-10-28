module.exports = {
    hdlError: err => {
        if(typeof err === "string")         { return err; }
        if(typeof err.error === "string")   { return err.error; }
        return "";
    }
};