module.exports = (() => {
    const cursoContr = require("../controllers/curso.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const curso = await cursoContr.store(req.body);
        res.json(curso);
    });

    router.get("/", async (req, res) => {
        const curso = await cursoContr.index();
        res.json(curso);
    });

    //localhost:3000/api/curso/2
    router.get("/:id", async (req, res) => {
        const curso = await cursoContr.show(req.params.id);
        res.json(curso);
    });

    router.put("/:id", async (req, res) => {
        const curso = await cursoContr.update(req.body, req.params.id);
        res.json(curso);
    });

    router.delete("/:id", async (req, res) => {
        const curso = await cursoContr.destroy(req.params.id);
        res.json(curso);
    });

    return router
})()