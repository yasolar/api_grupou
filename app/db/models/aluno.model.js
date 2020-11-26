const { DataTypes } = require("sequelize");
const Usuario = require("./usuario.model");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Aluno = sequelize.define(name, 
    {
        matricula: {
            type: DataTypes.STRING(10)
        }
    },
    {
        sequelize,
        tableName: name,
        timestamps:false
    }
);

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    Aluno.belongsToMany(models.hardSkill, {
        through: 'aluno_hardSkill',
        timestamps:false,
        foreignKey: {
            name:'id_aluno'
        },
        as:'hardSkills'
    })
}

module.exports = Aluno;