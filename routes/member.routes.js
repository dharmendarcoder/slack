module.exports = app => {
    const members = require("../controllers/member-controller");

    const router = require("express").Router();
    router.post("/", members.create);
    router.get("/", members.findAll);
    router.get("/:id", members.findOne);
    router.put("/:id", members.update);
    router.delete("/:id", members.delete);
    router.delete("/", members.deleteAll);
    app.use('/member', router);
};