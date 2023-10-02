require('dotenv').config();
const jwt = require("jsonwebtoken")


 exports.verifyUserToken = (req,res,next)=>{
    
    let lol = req.headers['authorization']
    if(typeof lol !== 'undefined'){
        const real = lol.split(" ");
        const token = real[1];
        req.token = token
        var verified
        try{
             verified = jwt.verify(token, process.env.TOKEN_SECRET);
        }catch{
            res.send("Invalid token")
        }       
        // console.log(verified.permission);
        req.user = verified
        next(); 
    }
    else{
       res.send("Token is not generated")
    }
    
 }

 exports.superAdmin = (req,res,next)=>{
    console.log("log from superAdmin middleWare");
    if(req.user.permission=="super_admin"){
        console.log("Is a super admin user");
        next();
    }
    else{
        console.log("Unauthorized");
        return res.status(401).send("Unauthorized")
    }
 }

 exports.Admin = (req,res,next)=>{
    console.log("log from superAdmin middleWare");
    if(req.user.permission=="view"){
        console.log("Is an admin user");
        next();
    }
    else{
        console.log("Unauthorized");
        return res.status(401).send("Unauthorized")
    }
 }
