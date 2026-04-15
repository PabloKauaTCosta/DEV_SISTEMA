const express = require('express');
require("dotenv").config();
const route = require('./src/config/routes')
const database = require ("./src/config/database")

database.authenticate();


let app = express();
app.use(express.json());

route(app);

app.listen(3000, ()=>{
    console.log("Server running on http://127.0.0.1:3000")
})