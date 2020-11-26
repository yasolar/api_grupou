const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de ativAvaliativa
//update PUT ativAvaliativa,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.ativAvaliativa.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.ativAvaliativa.findByPk(id);
    return resultado;    
}

exports.store = async (ativAvaliativa) => {
    const resultado = await models.ativAvaliativa.create(ativAvaliativa);
    return resultado;
}

exports.update = async (ativAvaliativa, id) => {
    const resultado = await models.ativAvaliativa.update(ativAvaliativa,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.ativAvaliativa.destroy({
        where: {id:id}
    });
    return resultado;   
}