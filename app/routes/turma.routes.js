module.exports = (() => {
    const turmaContr = require("../controllers/turma.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const turma = await turmaContr.store(req.body);
        res.json(turma);
    });

    router.get("/", async (req, res) => {
        const turma = await turmaContr.index();
        res.json(turma);
    });

    //localhost:3000/api/turma/2
    router.get("/:id", async (req, res) => {
        const turma = await turmaContr.show(req.params.id);
        res.json(turma);
    });

    router.put("/:id", async (req, res) => {
        const turma = await turmaContr.update(req.body, req.params.id);
        res.json(turma);
    });

    router.delete("/:id", async (req, res) => {
        const turma = await turmaContr.destroy(req.params.id);
        res.json(turma);
    });

    return router
})()