const express = require ("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://supun:YUpmXE7RGaOwfNCk@cluster0-sbw11.mongodb.net/ArogyaPharmacy", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database!');
    })  
   .catch(() => {
      console.log('Connection failed!');
   });

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: false}));

   app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");    
    next();
});


/**app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});**/

/*app.use("/api/posts", postsRoutes);*/
app.use("/api/user", userRoutes);

  
module.exports = app;

//?retryWrites=true&w=majority