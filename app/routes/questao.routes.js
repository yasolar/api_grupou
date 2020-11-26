module.exports = (() => {
    const questaoContr = require("../controllers/questao.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const questao = await questaoContr.store(req.body);
        res.json(questao);
    });

    router.get("/", async (req, res) => {
        const questao = await questaoContr.index();
        res.json(questao);
    });

    //localhost:3000/api/questao/2
    router.get("/:id", async (req, res) => {
        const questao = await questaoContr.show(req.params.id);
        res.json(questao);
    });

    router.put("/:id", async (req, res) => {
        const questao = await questaoContr.update(req.body, req.params.id);
        res.json(questao);
    });

    router.delete("/:id", async (req, res) => {
        const questao = await questaoContr.destroy(req.params.id);
        res.json(questao);
    });

    return router
})()