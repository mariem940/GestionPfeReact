const mongoose = require('mongoose')
const Cahier = require('../models/Cahier')


module.exports = async function (req, res, next) {
    const {
        cahierId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(cahierId)) {
        return res.status(403).json({
            error: 'Cahier not founded'
        })
    }

    try {
        let cahier = await Cahier.findById(cahierId).populate('user_id')

        if (!cahier) {
            return res.status(403).json({
                error: 'Cahier not founded'
            })
        }

        req.cahier = cahier
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}