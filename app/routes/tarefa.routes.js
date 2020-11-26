module.exports = (() => {
    const tarefaContr = require("../controllers/tarefa.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const tarefa = await tarefaContr.store(req.body);
        res.json(tarefa);
    });

    router.get("/", async (req, res) => {
        const tarefa = await tarefaContr.index();
        res.json(tarefa);
    });

    //localhost:3000/api/tarefa/2
    router.get("/:id", async (req, res) => {
        const tarefa = await tarefaContr.show(req.params.id);
        res.json(tarefa);
    });

    router.put("/:id", async (req, res) => {
        const tarefa = await tarefaContr.update(req.body, req.params.id);
        res.json(tarefa);
    });

    router.delete("/:id", async (req, res) => {
        const tarefa = await tarefaContr.destroy(req.params.id);
        res.json(tarefa);
    });

    return router
})()