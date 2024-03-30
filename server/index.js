import dotenv from "dotenv";
dotenv.config();
import "./src/db/dbindex.js";
import Todo from "./src/models/todo.models.js";
import express from "express";
import User from "./src/models/user.models.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});


app.get("/", (req, res) => {
  res.send("hi");
});

// sign in page taking creditials
app.post("/signin", (req, res) => {
  const { name, email, passw } = req.body;
  

  let newUser = User({ username: name, email: email, password: passw });

  newUser
    .save()
    .then((da) => {
      
      res.send("new user created")
    })
    .catch((error) => {
      
      
      
      if (error.code == 11000) {
        res.status(500).send('This user has already an account')
      }
    });
});


// login page

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  
  User.findOne({ email: email }).then((data) => {
    
    
      if (data.password == pass) {
        res.send("success")
        
      } else {
        res.send("pass is incorrect")
      }
    
  }).catch((error) => {
    res.status(500).send("no account create one")
  
  })
});

// array of todo 

app.post("/togo", (req,res) => {
  const {trimwords} = req.body;

  let newTodo = Todo({content: trimwords});

  newTodo.save().then(()=>{
    res.send("togo Saved")
  }).catch((error) => {

    res.status(500).send("this togo name already exsist")
  })
  
})
