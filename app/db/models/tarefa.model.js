const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Tarefa = sequelize.define(name, 
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull:false
        },
        responsavel: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            field:'criado_em'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field:'atualizado_em'
        },
    },
    {
        sequelize,
        tableName: name
    }
);

module.exports = Tarefa;