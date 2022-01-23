const Etudiant = require('../models/Etudiant')

module.exports = async function (req, res, next) {
    try {
        // Get user information by Id
        const etudiant = await Etudiant.findOne({
            _id: req.etudiant.id
        })

        if (!etudiant.role === 2) {
            return res.status(403).json({
                error: 'Etudiants resources access denied'
            })
        }

        next()
    } catch (error) {
        console.log(err)
        res.status(500).send('Access denied')
    }
}