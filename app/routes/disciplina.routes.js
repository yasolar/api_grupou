module.exports = (() => {
    const disciplinaContr = require("../controllers/disciplina.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const disciplina = await disciplinaContr.store(req.body);
        res.json(disciplina);
    });

    router.get("/", async (req, res) => {
        const disciplina = await disciplinaContr.index();
        res.json(disciplina);
    });

    //localhost:3000/api/disciplina/2
    router.get("/:id", async (req, res) => {
        const disciplina = await disciplinaContr.show(req.params.id);
        res.json(disciplina);
    });

    router.put("/:id", async (req, res) => {
        const disciplina = await disciplinaContr.update(req.body, req.params.id);
        res.json(disciplina);
    });

    router.delete("/:id", async (req, res) => {
        const disciplina = await disciplinaContr.destroy(req.params.id);
        res.json(disciplina);
    });

    return router
})()