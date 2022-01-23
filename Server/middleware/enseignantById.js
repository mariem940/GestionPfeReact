const mongoose = require('mongoose')
const Enseignant = require('../models/Enseignant')


module.exports = async function (req, res, next) {
    const {
        enseignantId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(enseignantId)) {
        return res.status(403).json({
            error: 'Enseignant not founded'
        })
    }

    try {
        let enseignant = await Enseignant.findById(enseignantId)

        if (!enseignant) {
            return res.status(403).json({
                error: 'Enseignant not founded'
            })
        }

        req.enseignant = enseignant
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}