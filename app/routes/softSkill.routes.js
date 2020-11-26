module.exports = (() => {
    const softSkillContr = require("../controllers/softSkill.controller")

    var router = require("express").Router();

    router.post("/", async (req, res) => {
        // res.json(req.body);
        const softSkill = await softSkillContr.store(req.body);
        res.json(softSkill);
    });

    router.get("/", async (req, res) => {
        const softSkill = await softSkillContr.index();
        res.json(softSkill);
    });

    //localhost:3000/api/softSkill/2
    router.get("/:id", async (req, res) => {
        const softSkill = await softSkillContr.show(req.params.id);
        res.json(softSkill);
    });

    router.put("/:id", async (req, res) => {
        const softSkill = await softSkillContr.update(req.body, req.params.id);
        res.json(softSkill);
    });

    router.delete("/:id", async (req, res) => {
        const softSkill = await softSkillContr.destroy(req.params.id);
        res.json(softSkill);
    });

    return router
})()