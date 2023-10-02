const express = require("express");

const db = require("../database");
const app = express();
const jwt = require("jsonwebtoken");


app.use(express.json());

//fetch all patients
exports.patient = (req, res) => {
 
      const sql = "SELECT * FROM patient";
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).json({
            message: "Authorized to view",
            dbResult: result 
          });
        }
      });
    
 
};


//Add patient data
exports.patient_add = (req, res) => {

  jwt.verify(req.token,process.env.TOKEN_SECRET, (err,authData)=>{
    if(err){
      res.send("invalid token")
    } else{
      const payload = {
        id: 3,
        name: "PatientAfterAuth",
        contact: 9766540865,
        email: "patientAfterAuth@gmail.com",
        dob: "2000-12-25",
        allergy: "milk",
      };
      
      const sql = "INSERT INTO patient SET ?";

    db.query(sql, payload, (err, result) => {
    err ? console.log(err) : res.status(200).json({message: "Patient added successfully", authData: authData});
  });

    }
  })
  //const {id,name,contact,dob} = req.body

};

//Update patient data
exports.patient_update = (req, res) => {
  const id = req.params.id;
  const updated_Payload = {
    name: "New_pati",
    contact: 1010101,
    email: "newpatient@gmail.co",
    dob: "2000-11-23",
    allergy: "pean",
  };

  const dataCheck = "select * from patient where id= ?";
  db.query(dataCheck, [id], (error, data) => {
    if (error) {
      return res.status(500).json({
        status: "fail",
        message: "An error occured",
      });
    } else {
      if (data.length == 0) {
        return res.status(404).json({
          status: "fail",
          message: "id does not exist",
        });
      } else {
        const sql = "update patient set ? where id=?";
        db.query(sql, [updated_Payload, id], (err) => {
          err ? console.log(err) : res.status(200).send("Updated successfuly!");
        });
      }
    }
  });
};

//Delete patient data
exports.patient_delete = (req, res) => {
  const id = req.params.id;
  console.log(id);

  const dataCheck = "select * from patient where id= ?";
  db.query(dataCheck, [id], (error, data) => {
    if (error) {
      return res.status(500).json({
        status: "fail",
        message: "An error occured",
      });
    } else {
      if (data.length == 0) {
        return res.status(404).json({
          status: "fail",
          message: "given id does not exist",
        });
      } else {
        const sql = "delete from patient where id = ?";
        db.query(sql, [id], (err) => {
          err ? console.log(err) : res.status(200).send("Deleted successfuly!");
        });
      }
    }
  });
};
