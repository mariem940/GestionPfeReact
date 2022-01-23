const Enseignant = require('../models/Enseignant')

module.exports = async function (req, res, next) {
    try {
        // Get user information by Id
        const enseignant = await Enseignant.findOne({
            _id: req.enseignant.id
        })

        if (!enseignant.role === 1) {
            return res.status(403).json({
                error: 'Enseignants resources access denied'
            })
        }

        next()
    } catch (error) {
        console.log(err)
        res.status(500).send('Access denied')
    }
}