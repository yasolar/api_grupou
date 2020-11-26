module.exports = (() => {
    const ativAvaliativaContr = require("../controllers/ativAvaliativa.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const ativAvaliativa = await ativAvaliativaContr.store(req.body);
        res.json(ativAvaliativa);
    });

    router.get("/", async (req, res) => {
        const ativAvaliativa = await ativAvaliativaContr.index();
        res.json(ativAvaliativa);
    });

    //localhost:3000/api/ativAvaliativa/2
    router.get("/:id", async (req, res) => {
        const ativAvaliativa = await ativAvaliativaContr.show(req.params.id);
        res.json(ativAvaliativa);
    });

    router.put("/:id", async (req, res) => {
        const ativAvaliativa = await ativAvaliativaContr.update(req.body, req.params.id);
        res.json(ativAvaliativa);
    });

    router.delete("/:id", async (req, res) => {
        const ativAvaliativa = await ativAvaliativaContr.destroy(req.params.id);
        res.json(ativAvaliativa);
    });

    return router
})()