module.exports = (() => {
    const avaliacao360Contr = require("../controllers/avaliacao360.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const avaliacao360 = await avaliacao360Contr.store(req.body);
        res.json(avaliacao360);
    });

    router.get("/", async (req, res) => {
        const avaliacao360 = await avaliacao360Contr.index();
        res.json(avaliacao360);
    });

    //localhost:3000/api/avaliacao360/2
    router.get("/:id", async (req, res) => {
        const avaliacao360 = await avaliacao360Contr.show(req.params.id);
        res.json(avaliacao360);
    });

    router.put("/:id", async (req, res) => {
        const avaliacao360 = await avaliacao360Contr.update(req.body, req.params.id);
        res.json(avaliacao360);
    });

    router.delete("/:id", async (req, res) => {
        const avaliacao360 = await avaliacao360Contr.destroy(req.params.id);
        res.json(avaliacao360);
    });

    return router
})()