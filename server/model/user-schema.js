const Mongoose = require('mongoose');

const leadsSchema = new Mongoose.Schema({
    leadowner: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    leadsource: {
        type: String,
        required: true
    },
    annualrevenue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    comment: {
        type:String
    },
    leaddate: {
        type: Date
    },
})
const lead = Mongoose.model("Leads", leadsSchema);


module.exports = lead;
