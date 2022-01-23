const mongoose = require('mongoose')
const Validation = require('../models/Validation')


module.exports = async function (req, res, next) {
    const {
        validationId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(validationId)) {
        return res.status(403).json({
            error: 'Validation not founded'
        })
    }

    try {
        let validation = await Validation.findById(validationId).populate('cahier_id').populate('user_id')

        if (!validation) {
            return res.status(403).json({
                error: 'Validation not founded'
            })
        }

        req.validation = validation
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}