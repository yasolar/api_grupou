const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Avalicao360 = sequelize.define(name, 
    {
        satisfacao: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        notaMembro: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        skillMembro: {
            type: DataTypes.STRING(50),
            allowNull:false
        },
        createdAt: {
            type: DataTypes.DATE,
            field:'criado_em'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field:'atualizado_em'
        }       
    },
    {
        sequelize,
        tableName: name
    }
);

module.exports = Avalicao360;