const mongoose = require('mongoose')
const Annee = require('../models/Annee')


module.exports = async function (req, res, next) {
    const {
        anneeId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(anneeId)) {
        return res.status(403).json({
            error: 'Annee not founded'
        })
    }

    try {
        let annee = await Annee.findById(anneeId)

        if (!annee) {
            return res.status(403).json({
                error: 'Annee not founded'
            })
        }

        req.annee = annee
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}