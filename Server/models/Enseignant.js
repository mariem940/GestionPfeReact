const mongoose = require('mongoose');

const EnseignantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Unique email for each user
  },
  cin: {
    type: String,
    required: true,
  },
  garade: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    // Role of user it will be (normal or admin )
    type: Number,
    default: 1,
  },
});

module.exports = Enseignant= mongoose.model('Enseignant', EnseignantSchema )