const express = require('express');
const user = require("../models/user")

 const controls = require("../controls/controlUser")
const router = express.Router();

router.get("/home", (req, res)=>{
    res.send("welcome !!!!!!")

})


router.post("/us",controls.postUser)

// GET :RETURN ALL USERS 
router.get("/", async(req,res)=>{
    try {
        const result = await user.find();
        res.status(202).send({response: result, message :"geting user"})
    } catch (error) {
        res.status(405).send({message:"can not get"})
    }
})



//PUT : EDIT A USER BY ID 
router.put('/:id',async(req,res)=>{
    try {
        const result = await user.updateOne({_id :req.params.id},{$set:{...req.body}})
        res.status(200).send({response: result, message :"updating user"})
    } catch (error) {
        res.status(405).send({message:"can not update"})
    }
})


//DELETE : REMOVE A USER BY ID 
router.delete('/:id', async(req,res)=>{
    try {
        const result = await user.deleteOne({_id :req.params.id},{$set:{...req.body}})
        res.status(200).send({response: result, message :"deleting user"})
    } catch (error) {
        res.status(405).send({message:"can not delete"})
    }
})

module.exports =router
