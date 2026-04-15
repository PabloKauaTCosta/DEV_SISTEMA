require("dotenv").config();
const database = require('./src/config/database');


const apply = async ()=>{
    await database.authenticate();
    await database.sync({ alter:true });
    await database.close();
}

apply() 