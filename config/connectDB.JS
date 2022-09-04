const mongoose = require('mongoose')
require("dotenv").config({path :'./config/.env'});
const uriAtlas = process.env.mongoURI
 const connectDB =async()=>{
     try {
         let result = await mongoose.connect(uriAtlas)
         console.log("DB connected");
     } catch (error) {
         console.log("can not connect");
     }

 }


module.exports = connectDB