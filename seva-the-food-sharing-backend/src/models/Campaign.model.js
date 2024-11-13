const mongoose = require('mongoose');

const NGOSchema = new mongoose.Schema({
    title: {type: String, required: true},
    Date: {type: String, required: true},
    Location: {type: String, required: true},
    description: {type: String, required: true},
    goal: {type: Boolean, required: true},
    image: {type: String, required: true},
    id: {type: Number, required: true},
    completed: {type: Boolean, required: true}
})

module.exports = mongoose.model("campaigns", NGOSchema);
