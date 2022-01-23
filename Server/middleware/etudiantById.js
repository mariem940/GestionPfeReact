const mongoose = require('mongoose')
const Etudiant = require('../models/Etudiant')


module.exports = async function (req, res, next) {
    const {
        etudiantId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(etudiantId)) {
        return res.status(403).json({
            error: 'Etudiant not founded'
        })
    }

    try {
        let etudiant = await Etudiant.findById(etudiantId)

        if (!etudiant) {
            return res.status(403).json({
                error: 'Etudiant not founded'
            })
        }

        req.etudiant = etudiant
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}