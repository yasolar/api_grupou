const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de hardSkill
//update PUT hardSkill,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.hardSkill.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.hardSkill.findByPk(id);
    return resultado;    
}

exports.store = async (hardSkill) => {
    const resultado = await models.hardSkill.create(hardSkill);
    return resultado;
}

exports.update = async (hardSkill, id) => {
    const resultado = await models.hardSkill.update(hardSkill,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.hardSkill.destroy({
        where: {id:id}
    });
    return resultado;   
}