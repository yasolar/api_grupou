module.exports = (() => {
    const hardSkillContr = require("../controllers/hardSkill.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const hardSkill = await hardSkillContr.store(req.body);
        res.json(hardSkill);
    });

    router.get("/", async (req, res) => {
        const hardSkill = await hardSkillContr.index();
        res.json(hardSkill);
    });

    //localhost:3000/api/hardSkill/2
    router.get("/:id", async (req, res) => {
        const hardSkill = await hardSkillContr.show(req.params.id);
        res.json(hardSkill);
    });

    router.put("/:id", async (req, res) => {
        const hardSkill = await hardSkillContr.update(req.body, req.params.id);
        res.json(hardSkill);
    });

    router.delete("/:id", async (req, res) => {
        const hardSkill = await hardSkillContr.destroy(req.params.id);
        res.json(hardSkill);
    });

    return router
})()