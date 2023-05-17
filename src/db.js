const sequelize = require('sequelize');

const database = new sequelize('NodeSQLAula','sa','123456',
{ 
    dialect:'mssql', host:'localhost', port: 49806
}); // Constante do BD

database.sync(); // Se não existir a tabela no bd ele recria 

module.exports = database; 