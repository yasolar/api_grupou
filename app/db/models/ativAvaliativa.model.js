const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const AtivAvaliativa = sequelize.define(name, 
    {
        titulo: {
            type: DataTypes.STRING(50),
            allowNull:false
        },
        descricao: {
            type: DataTypes.TEXT
        },
        nota: {
            type: DataTypes.DECIMAL(10,2)
        },
        prazo: {
            type: DataTypes.DATE,
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

module.exports = AtivAvaliativa;