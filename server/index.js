const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const db = "mongodb+srv://tanmudi1234:tanmudi1234@cluster0.x70bq.mongodb.net/leadsDB"

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to database");
})

app.use("/", require("./route/route"));

app.listen('4000', ()=>{
    console.log("Server is running at port 4000");
})


// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import database from './database/db.js';

// import userSchema from './model/user-schema.js';
// import userRoute from "./route/route.js";

// mongoose.Promise = global.Promise;

// mongoose.connect(database.db, {
//     useNewUrlParser: true
// }).then(()=>{
//     console.log("Database connected successfully");
// },
//     error => {
//         console.log("Database not connected successfully: "+error);
//     }
// )

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());
// app.use('/users',userRoute);

// const port = 5000;
// const server = app.listen(port, ()=>{
//     console.log(`Server started at port ${port}`);
// })

// //Error Handling
// app.use((req, res, next)=>{
//     next(createError(404));
// })

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });
// // const DB = 'mongodb+srv://tanmudi:tanmudikaaccess@cluster0.x70bq.mongodb.net/MERN1?retryWrites=true&w=majority'

// // mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
// //     app.listen(port, ()=>{
// //         console.log(`The server has started at port ${port}`);
// //     })
// // }).catch(error => {
// //     console.log('Error', error.message);
// // })



// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();
// const port = 4000;

// app.use(express.json());

// mongoose.connect("mongodb+srv://tanmudi:tanmudikaaccess@cluster0.x70bq.mongodb.net/user?retryWrites=true&w=majority", {useNewUrlParser: true});

// app.listen(port, ()=>{
//     console.log(`Server has started at port ${port}`);
// })