const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de aluno
//update PUT aluno,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.aluno.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.aluno.findByPk(id);
    return resultado;    
}

exports.store = async (aluno) => {
    const resultado = await models.aluno.create(aluno);
    return resultado;
}

exports.update = async (aluno, id) => {
    const resultado = await models.aluno.update(aluno,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.aluno.destroy({
        where: {id:id}
    });
    return resultado;   
}