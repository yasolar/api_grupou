const { DataTypes } = require("sequelize");
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Professor = sequelize.define(name, 
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

Professor.associate = (models) => {
    Professor.belongsTo(models.usuario, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    Professor.belongsToMany(models.hardSkill, {
        through: 'professor_hardSkill',
        timestamps:false,
        foreignKey: {
            name:'id_professor'
        },
        as:'hardSkills'
    })
}

module.exports = Professor;