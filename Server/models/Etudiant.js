const mongoose = require('mongoose');

const EtudiantSchema = new mongoose.Schema({
  nomutilisateur: {
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
  numcarte: {
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
    default: 2,
  },
});

module.exports = Etudiant = mongoose.model('Etudiant', EtudiantSchema )