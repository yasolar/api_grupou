const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Turma = sequelize.define(name, 
    {
        sala: {
            type: DataTypes.STRING,
            allowNull:false
        },
        numero: {
            type: DataTypes.BIGINT(3),
            allowNull:false
        },
        horario: {
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

module.exports = Turma;