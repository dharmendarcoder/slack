module.exports = app => {
    const channel = require("../controllers/channel-controller");

    const router = require("express").Router();
    router.post("/", channel.create);
    router.get("/", channel.findAll);
    router.get("/:id", channel.findOne);
    router.put("/:id", channel.update);
    router.delete("/:id", channel.delete);
    router.delete("/", channel.deleteAll);
    app.use('/channel', router);
};