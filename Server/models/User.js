const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  role: {
    // Role of user it will be (normal or admin )
    type: Number,
    default: 0,
  },
});

module.exports = User = mongoose.model('User', UserSchema )