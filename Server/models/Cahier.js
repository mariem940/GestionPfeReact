const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema;


const CahierSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      definition: {
        type: String,
        required: true,
      },
      consignes: {
        type: String,
        required: true,
      },
      techniques: {
        type: String,
        required: true,
      },
      user_id: {
        type: ObjectId,
        ref: 'Etudiant',

      },
        etat: {
          type: Boolean,
        }
     
    },
          {
        timestamps: true
    
});

module.exports = mongoose.model('Cahier', CahierSchema)