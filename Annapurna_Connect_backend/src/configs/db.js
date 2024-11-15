const mongoose = require("mongoose");
mongoose.set('strictQuery', false); // or true, depending on your use case
module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://singlagoutam12:1146852%40Gs@cluster0.br2oaia.mongodb.net/Seva?retryWrites=true&w=majority&appName=Cluster0'
    );
  } catch (err) {
    console.log(err);
  }
};
