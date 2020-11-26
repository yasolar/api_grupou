const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Curso = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(50),
            allowNull:false
        },
        descricao: {
            type: DataTypes.TEXT
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

module.exports = Curso;