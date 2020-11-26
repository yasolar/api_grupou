module.exports = (() => {
    const grupoContr = require("../controllers/grupo.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const grupo = await grupoContr.store(req.body);
        res.json(grupo);
    });

    router.get("/", async (req, res) => {
        const grupo = await grupoContr.index();
        res.json(grupo);
    });

    //localhost:3000/api/grupo/2
    router.get("/:id", async (req, res) => {
        const grupo = await grupoContr.show(req.params.id);
        res.json(grupo);
    });

    router.put("/:id", async (req, res) => {
        const grupo = await grupoContr.update(req.body, req.params.id);
        res.json(grupo);
    });

    router.delete("/:id", async (req, res) => {
        const grupo = await grupoContr.destroy(req.params.id);
        res.json(grupo);
    });

    return router
})()