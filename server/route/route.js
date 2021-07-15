const express = require('express');
const router = express.Router();
const lead = require("../model/user-schema");


router.route("/createlead").post((req, res)=>{
    const leadowner = req.body.leadowner;
    const company= req.body.company;
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;
    const email= req.body.email;
    const phone= req.body.phone;
    const leadsource= req.body.leadsource;
    const annualrevenue= req.body.annualrevenue;
    const city= req.body.city;
    const state= req.body.state;
    const country= req.body.country;


    const newLead = new lead({
        leadowner,
        company,
        firstname,
        lastname,
        email,
        phone,
        leadsource,
        annualrevenue,
        city,
        state,
        country
    });

    newLead.save();
})

router.route("/lead").get(async (req, res)=>{
    try{
        let getdata = await lead.find();
        res.json(getdata);
    }catch{
        (err)=>{
            console.error(err);
        }
        // res.json({message: error.message});
    }
})

router.route("/lead/:id").get( async (req, res)=>{
    const id = req.params.id;
    try{
        const uplead = await lead.findById(id);
        res.json(uplead);
    }catch{
        (err)=>{
            console.error(err);
        }
    }
})

router.route("/lead/:id").put( async (req, res)=>{

    const putlead = req.body;
    // console.log(putlead);
    const editlead = new lead(putlead);
    // console.log(putlead);

    try{
        await lead.updateOne({ _id: req.params.id}, editlead);
        console.log(req.params.id)
        console.log(editlead);
        res.json(editlead);
    }catch{
        (err)=>{
            console.log(err);
        }
    }
})


module.exports = router;
























// router.route("/lead").get(async (req, res)=>{
//     await lead.find()
//         .then(foundleads => res.json(foundleads));
// })



// import express from 'express';
// import Mongoose from 'mongoose';

// const router = express.Router();

// import user from '../model/user-schema';





// module.exports = router;

// router.route('/create').post((req, res, next)=>{
//     user.create(req.body, (error, data) => {
//         if(error){
//             return next(error);
//         } else {
//             console.log(data);
//             res.json(data);
//         }
//     })
// })

