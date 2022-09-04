const express =require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config({path :'./config/.env'})
connectDB();
const port = process.env.PORT
const app= express()
 app.use(express.json())
 app.use("/api/user",require("./Routing/user"))

 app.post('/api/user', (req,res)=>{
     const {person} = req.body
     console.log(req.body);
     user.create({person}, (err)=>{
         err? res.status(404).send("faild to add user"): res.status(201).send("user added")
     }) 
    
 })
app.listen(port,(err)=>{
    err? console.log("error", err.toString()): console.log(`server is running in ${port}`)
})