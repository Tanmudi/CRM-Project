const express = require('express');
const router = express.Router();
const lead = require("../model/user-schema");


router.route("/createlead").post((req, res) => {
    const leadowner = req.body.leadowner;
    const company = req.body.company;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const leadsource = req.body.leadsource;
    const annualrevenue = req.body.annualrevenue;
    const status = req.body.status;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const comment = req.body.comment;


    const newLead = new lead({
        leadowner,
        company,
        firstname,
        lastname,
        email,
        phone,
        leadsource,
        annualrevenue,
        status,
        city,
        state,
        country,
        comment
    });

    newLead.save();
})

router.route("/lead").get(async (req, res) => {
    try {
        let getdata = await lead.find();
        res.json(getdata);
    } catch {
        (err) => {
            console.error(err);
        }
        // res.json({message: error.message});
    }
})

router.route("/lead/:id").get(async (req, res) => {
    const id = req.params.id;
    try {
        const uplead = await lead.findById(id);
        res.json(uplead);
    } catch {
        (err) => {
            console.error(err);
        }
    }
})

router.route("/leadupdate/:id").patch(async (req, res) => {

    // const putlead = req.body;
    // // console.log(putlead);
    // const editlead = new lead(putlead);
    // // console.log(putlead);

    try {
        const putlead = await lead.findById(req.params.id)
        putlead.leadowner = req.body.leadowner;
        putlead.company = req.body.company;
        putlead.firstname = req.body.firstname;
        putlead.lastname = req.body.lastname;
        putlead.email = req.body.email;
        putlead.phone = req.body.phone;
        putlead.leadsource = req.body.leadsource;
        putlead.annualrevenue = req.body.annualrevenue;
        putlead.status = req.body.status;
        putlead.city = req.body.city;
        putlead.state = req.body.state;
        putlead.country = req.body.country;
        putlead.comment = req.body.comment;
        // await lead.updateOne({ _id: req.params.id }, editlead);
        const u1 = await putlead.save();
        res.json(u1);
    } catch {
        (err) => {
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

