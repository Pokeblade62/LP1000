const express = require("express")
const mysql = require("mysql")
require('dotenv').config()
const bodyParser = require("body-parser")
const db = require("./database")
const appRouter = require('./router/appRouter')
const app= express()

app.use(express.json())
app.use('/api',appRouter)

db.connect((err)=>{
   err ? console.log("error connecting db") : console.log("Database connected successfully")
})

app.listen(process.env.PORT,()=>{
    console.log("Listening on 3000");
})