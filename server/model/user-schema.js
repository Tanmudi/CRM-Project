const Mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

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
})
const lead = Mongoose.model("Leads", leadsSchema);

module.exports = lead;

// autoIncrement.initialize(Mongoose.connetion);
// leadsSchema.plugin(autoIncrement.plugin, "Leads");


// const counterSchema = new Mongoose.Schema({
//     _id: String,
//     seq_val: Number,
// })
// const counter = Mongoose.model("counter", counterSchema);
// const counter1 = new counter();


// module.exports = counter1;

// const userschema = new mongoose.Schema({
//     leadowner: String,
//     company: String,
//     firstname: String,
//     lastname: String,
//     email: String,
//     phone: Number,
//     leadsource: String,
//     annualrevenue: String,
//     city: String,
//     state: String,
//     country: String
// })

// export default mongoose.model('user', userschema);
