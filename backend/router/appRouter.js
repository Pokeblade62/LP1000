const express = require("express")

const app = express()

const authController = require("../controllers/authController")
const patientController = require("../controllers/patientController")
const authMiddleware = require("../middlewares/authMiddleware")
const validateMiddleware = require("../middlewares/validate")


// app.route('/').get(home)

app.post('/signup',validateMiddleware.authLoginValidator,authController.signup)
app.route('/signin').post(authController.signin)
app.route('/patient').get(authMiddleware.verifyUserToken, patientController.patient)
app.route('/patient').post(authMiddleware.verifyUserToken, authMiddleware.superAdmin,patientController.patient_add)
app.route('/patient/:id').put(patientController.patient_update).delete(patientController.patient_delete)


module.exports = app;
