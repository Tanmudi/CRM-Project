const Mongoose = require("mongoose");

const commentSchema = new Mongoose.Schema({
    addcomment: {
        type: String
    },
    commid: {
        type: String
    },
    commdate: {
        type: Date
    },
    commtime: {
        type: String
    }
})

const comm = Mongoose.model("Comments", commentSchema);

module.exports = comm;