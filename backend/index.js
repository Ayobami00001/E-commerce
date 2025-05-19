const express = require("express");
const app = require ("express")();
require('dotenv').config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require('./routes/user.routes')
const cors = require ("cors")
const fs = require('fs');
const path = require('path');



const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static('uploads'));

// require('ejs')
// app.set('view engine','ejs')
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 2004;
const URI = process.env.uri || undefined

mongoose.connect(URI)
  .then(() => {
    console.log("lift off'Database neuralink connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(cors());
  app.use(express.json())
  app.use(express.urlencoded ({extended: true}));
  app.use(express.static('public'));
  app.use('/', userRouter)

  // app.post('/signup', async(req, res)=> {
  //   try { 
  //     const {name, email, age, password} = req.body
  //     const newUser = new users ({ name, email,age, password})
  //     await newUser.save()
  //     res.status(201).json({message: ' User added successfully', user: newUser})
  //    } catch(err) {
  //     console.log(err);
  //     res.status(501).json({message: err.message})    
  //    }
  // })

  
  // app.get('/login', (req, res) => {
  //   res.render('pages/login')
  // })
  
  // app.get("/api", (req, res) => {
  //   res.send(cities);
  // });
  
  // app.get('/dashboard',(req,res) => {
  //   fetch('https://second-class.vercel.app/api')
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     res.render('pages/dashboard', {data})
  //   })
  //   .catch(err => console.log(err))
  // })



  app.listen(port, () =>{
    console.log(`server started at port ${port}`);
    
  })