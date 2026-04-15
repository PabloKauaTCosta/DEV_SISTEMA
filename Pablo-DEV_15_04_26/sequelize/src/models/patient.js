const connection = require('../config/database');
const {DataTypes} = require('sequelize');

const Patient = connection.define("Patient", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    priority:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
},
{
    tableName: "patients",
    timestamps: true
}
);
module.exports = Patient;