const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de tarefa
//update PUT tarefa,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.tarefa.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.tarefa.findByPk(id);
    return resultado;    
}

exports.store = async (tarefa) => {
    const resultado = await models.tarefa.create(tarefa);
    return resultado;
}

exports.update = async (tarefa, id) => {
    const resultado = await models.tarefa.update(tarefa,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.tarefa.destroy({
        where: {id:id}
    });
    return resultado;   
}