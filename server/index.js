const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req,res) => {
    const{email,pass} = req.body;
    console.log({email,pass})
    EmployeeModel.findOne({email: email}).then(user => {
        if (user) {
            if(user.pass = pass){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no records")
        }
    })
})




app.post('/register',(req,res) => {
    EmployeeModel.create(req.body).then(employee => res.json(employee)).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is running ")
})