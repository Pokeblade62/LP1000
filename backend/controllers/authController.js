const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi")
const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());

//signin
 exports.signin = async (req, res) => {
  // const {email,password}=req.body
  const email = "admin4@ghospital.com";
  const password = "admin11123";

  const sql = "select * from user where email=?";

  db.query(sql, [email], async (err, result) => {
    if(err){
        return res.status(500).send("Internal error")
    }
        
    console.log(result);
    const validPass = await bcrypt.compare(password, result[0].password);
    if (!validPass) {
      return res.status(401).send("Email or Password is wrong");
    }

    const payload = {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      permission: result[0].permission
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET,{ expiresIn: '1h' });
    res.status(200).send({ token: token });
  });

};





//signup
 exports.signup = async (req, res) => {
  const {name,email,password}=req.body


  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const payload = {
    name: name,
    email: email,
    password: hashPassword,
    last_login: "2023-09-22",
    permission: "view",
    status: "active",
  };

  const sql = "INSERT INTO user SET ?";

  db.query(sql, payload, (err, result) => {

    err ? console.log(err) : res.send("Added successfully");
  });
};
