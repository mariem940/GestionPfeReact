const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema;

const AnneeSchema = new mongoose.Schema({
    
      date:{
          type: Date,
          required: true,
      },
      datetime:{
          type: Date,
          required: true,
      },
      datetimefin:{
          type: Date,
          required: true,
      }

    },
          {
        timestamps: true
    
});

module.exports = mongoose.model('Annee', AnneeSchema)