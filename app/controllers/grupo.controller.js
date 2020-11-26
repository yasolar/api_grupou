const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de grupo
//update PUT grupo,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.grupo.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.grupo.findByPk(id);
    return resultado;    
}

exports.store = async (grupo) => {
    const resultado = await models.grupo.create(grupo);
    return resultado;
}

exports.update = async (grupo, id) => {
    const resultado = await models.grupo.update(grupo,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.grupo.destroy({
        where: {id:id}
    });
    return resultado;   
}