module.exports = (() => {
    const usuarioContr = require("../controllers/usuario.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const usuario = await usuarioContr.store(req.body);
        res.json(usuario);
    });

    router.get("/", async (req, res) => {
        const usuario = await usuarioContr.index();
        res.json(usuario);
    });

    //localhost:3000/api/usuario/2
    router.get("/:id", async (req, res) => {
        const usuario = await usuarioContr.show(req.params.id);
        res.json(usuario);
    });

    router.put("/:id", async (req, res) => {
        const usuario = await usuarioContr.update(req.body, req.params.id);
        res.json(usuario);
    });

    router.delete("/:id", async (req, res) => {
        const usuario = await usuarioContr.destroy(req.params.id);
        res.json(usuario);
    });

    return router
})()