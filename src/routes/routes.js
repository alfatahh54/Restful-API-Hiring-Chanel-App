require('dotenv/config')
const express = require('express')
const Route = express.Router()

const todoList = require("../controllers/engineer-controller");
const todoListCompany = require("../controllers/company-controller");
const todoListUser = require("../controllers/user_controller")

// routes engineer
Route    
    .get("/engineers",todoList.getEngineers)
    .post("/engineer",todoList.createEngineer)
    .patch("/engineer/:id",todoList.updateEngineer)
    .delete("/engineer/:id",todoList.deleteEngineer);

// routes company
Route
    .get("/companies",todoListCompany.getCompany)
    .post("/company",todoListCompany.createCompany)
    .patch("/company/:id",todoListCompany.updateCompany)
    .delete("/company/:id",todoListCompany.deleteCompany);

//routes user
Route
    .post("/login",todoListUser.loginUser)
    .post("/register",todoListUser.registerUser)

module.exports = Route;