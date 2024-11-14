const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
   address : {type: String, required: true},
   devotedTime: {type: Number, required: true},
   volunteerDate:{type: String, required: true},
   volunteerTime: {type: String, required: true},
   phoneNo: {type: String, required: true},
   donateTo:{type: String, required: true},
})

module.exports = mongoose.model("Volunteer", VolunteerSchema);


