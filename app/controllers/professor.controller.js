const models = require('../db/models');
//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GETT ID
//store POST criar instancia de professor
//update PUT professor,ID
//destroy DELETE ID


exports.index = async () => {
    const resultado = await models.professor.findAll();
    return resultado;
}

exports.show = async (id) => {
    const resultado = await models.professor.findByPk(id);
    return resultado;    
}

exports.store = async (professor) => {
    const resultado = await models.professor.create(professor);
    return resultado;
}

exports.update = async (professor, id) => {
    const resultado = await models.professor.update(professor,{
        where: {id:id}
    });
    return resultado;
}

exports.destroy = async (id) => {
    const resultado = await models.professor.destroy({
        where: {id:id}
    });
    return resultado;   
}