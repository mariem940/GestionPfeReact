const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema;


const ValidationSchema = new mongoose.Schema({
    cahier_id: {
        type: ObjectId,
        ref: 'Cahier',
       
      },
      user_id: {
        type: ObjectId,
        ref: 'Enseignant',
        
      }
    },
          {
        timestamps: true
    
});

module.exports = mongoose.model('Validation', ValidationSchema)