module.exports = (() => {
    const professorContr = require("../controllers/professor.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const professor = await professorContr.store(req.body);
        res.json(professor);
    });

    router.get("/", async (req, res) => {
        const professor = await professorContr.index();
        res.json(professor);
    });

    //localhost:3000/api/professor/2
    router.get("/:id", async (req, res) => {
        const professor = await professorContr.show(req.params.id);
        res.json(professor);
    });

    router.put("/:id", async (req, res) => {
        const professor = await professorContr.update(req.body, req.params.id);
        res.json(professor);
    });

    router.delete("/:id", async (req, res) => {
        const professor = await professorContr.destroy(req.params.id);
        res.json(professor);
    });

    return router
})()