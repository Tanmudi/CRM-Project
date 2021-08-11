const express = require('express');
const router = express.Router();
const lead = require("../model/user-schema");
const comm = require("../model/comment-schema")


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
    const leaddate = req.body.leaddate;


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
        comment,
        leaddate,
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


router.route("/comment").post((req, res)=>{
    const addcomment = req.body.addcomment;
    const commid = req.body.commid;
    const commdate = req.body.commdate;
    const commtime = req.body.commtime;

    const newcomment = new comm({
        addcomment,
        commid,
        commdate,
        commtime
    });
    newcomment.save();
})

router.route("/commentupdate/:id").patch(async (req, res) => {

    try {
        const putlead = await lead.findById(req.params.id)
        console.log(req.body.addcomment)
        putlead.comment = req.body.addcomment;
        // await lead.updateOne({ _id: req.params.id }, editlead);
        const u1 = await putlead.save();
        res.json(u1);
    } catch {
        (err) => {
            console.log(err);
        }
    }
})

router.route("/getcomment/:id").get(async(req, res)=>{
    _id = req.params.id;
    try {
        const getcomm = await comm.find({commid: _id});
        res.json(getcomm);
    } catch {
        (err) => {
            console.error(err);
        }
    }
})

router.route("/comments").get(async (req, res) => {
    try {
        let getdata = await lead.find({status: "complete"});
        res.json(getdata);
    } catch {
        (err) => {
            console.error(err);
        }
    }
})
 

router.route("/analysisgetbyyear").get(async (req, res)=>{
    let today = new Date()
    const checkdatelower = today.getFullYear() + '-' + '01' + '-' + '01'
    const checkdateupper = (today.getFullYear() + 1) + '-' + '01' + '-' + '01'
    try{
        let getdata = await lead.aggregate([
            {
                $match : { "leaddate": { $gte: new Date(checkdatelower), $lt: new Date(checkdateupper) } }
            },
            {
                $group : {
                    _id: { $month : "$leaddate"},
                    count: {$sum: 1}
                }
            },
            { $sort : { _id : 1 } }
        ])
        res.json(getdata)
    } catch {
        (err) => {
            console.error(err);
        }
    }
})

router.route("/analysisgetbypreviousyear").get(async (req, res)=>{
    let today = new Date()
    const checkdatelower = (today.getFullYear()-1) + '-' + '01' + '-' + '01'
    const checkdateupper = today.getFullYear() + '-' + '01' + '-' + '01'
    try{
        let getdata = await lead.aggregate([
            {
                $match : { "leaddate": { $gte: new Date(checkdatelower), $lt: new Date(checkdateupper) } }
            },
            {
                $group : {
                    _id: { $month : "$leaddate"},
                    count: {$sum: 1}
                }
            },
            { $sort : { _id : 1 } }
        ])
        res.json(getdata)
    } catch {
        (err) => {
            console.error(err);
        }
    }
})

router.route("/analysisgetbycurrentmonth").get(async (req, res)=>{
    let today = new Date()
    const checkdatelower = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + '01'
    const checkdateupper = today.getFullYear() + '-' + (today.getMonth()+2) + '-' + '01'
    try{
        let getdata = await lead.aggregate([
            {
                $match : { "leaddate": { $gte: new Date(checkdatelower), $lt: new Date(checkdateupper) } }
            },
            {
                $group : {
                    _id : {$dayOfMonth : "$leaddate"},
                    count : {$sum : 1}
                }
            },
            { $sort : { _id : 1 } }
        ])
        // console.log(getdata)
        res.json(getdata)
    } catch {
        (err) => {
            console.error(err);
        }
    }
})


router.route("/analysisgetbypreviousmonth").get(async (req, res)=>{
    let today = new Date()
    const checkdatelower = today.getFullYear() + '-' + today.getMonth() + '-' + '01'
    const checkdateupper = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + '01'
    try{
        let getdata = await lead.aggregate([
            {
                $match : { "leaddate": { $gte: new Date(checkdatelower), $lt: new Date(checkdateupper) } }
            },
            {
                $group : {
                    _id : {$dayOfMonth : "$leaddate"},
                    count : {$sum : 1}
                }
            },
            { $sort : { _id : 1 } }
        ])
        res.json(getdata)
    } catch {
        (err) => {
            console.error(err);
        }
    }
})


module.exports = router;

