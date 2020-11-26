const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de avaliacao360
//update PUT avaliacao360,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.avaliacao360.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.avaliacao360.findByPk(id);
    return resultado;    
}

exports.store = async (avaliacao360) => {
    const resultado = await models.avaliacao360.create(avaliacao360);
    return resultado;
}

exports.update = async (avaliacao360, id) => {
    const resultado = await models.avaliacao360.update(avaliacao360,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.avaliacao360.destroy({
        where: {id:id}
    });
    return resultado;   
}