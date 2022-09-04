const User = require("../models/user")

exports.postUser = async(req,res)=>{
    try {
       const newUser = new User(req.body) 
       //test name
       if(!req.body.name){
           res.status(400).send({message :"name is required"})
           return;
       }
       // tets email
       if(!req.body.email){
        res.status(400).send({message :"email is required"})
        return;
    }
    // test exist email
    const userEmail= await User.findOne({email:req.body.email})
    if(userEmail){
        res.status(400).send({message :"email is exist"})
        return;
    }
     res.send({response: response, message:"user is saved"} )
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"can not save"})
    }
    const response = await newUser.save();

}