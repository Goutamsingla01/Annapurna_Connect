const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
   address : {type: String, required: true},
   bestBefore: {type: String, required: true},
   donateDate:{type: String, required: true},
   donateTime: {type: String, required: true},
   meal: {type: String, required: true},
   phoneNo: {type: String, required: true},
   quantity: {type: Number, required: true},
   type: {type: String, required: true}
})

module.exports = mongoose.model("Donation", DonationSchema);


