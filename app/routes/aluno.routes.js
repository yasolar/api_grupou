module.exports = (() => {
    const alunoContr = require("../controllers/aluno.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const aluno = await alunoContr.store(req.body);
        res.json(aluno);
    });

    router.get("/", async (req, res) => {
        const aluno = await alunoContr.index();
        res.json(aluno);
    });

    //localhost:3000/api/aluno/2
    router.get("/:id", async (req, res) => {
        const aluno = await alunoContr.show(req.params.id);
        res.json(aluno);
    });

    router.put("/:id", async (req, res) => {
        const aluno = await alunoContr.update(req.body, req.params.id);
        res.json(aluno);
    });

    router.delete("/:id", async (req, res) => {
        const aluno = await alunoContr.destroy(req.params.id);
        res.json(aluno);
    });

    return router
})()