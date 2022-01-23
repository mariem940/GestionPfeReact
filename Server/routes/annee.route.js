express = require('express')
const router = express.Router()
const Annee = require('../models/Annee')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')
const anneeById = require('../middleware/anneeById')
const {
    check,
    validationResult
} = require('express-validator')

// @route   POST api/annee
// @desc    Create annee
// @access  Private Admin
router.post('/', [
    check('date', 'date is required').trim().not().isEmpty()
], auth, adminAuth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const {
        user_id,
        date,
        datetime,
        datetimefin
        
    } = req.body
    try {
        let annee = await Annee.findOne({
            date
        })

        if (annee) {
            return res.status(403).json({
                error: 'Annee already exist'
            })
        }

        const newAnnee = new Annee({
            user_id,
            date,
            datetime,
            datetimefin
            
        })
        annee = await newAnnee.save()
        res.json(annee)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/annee/all
// @desc    Get all annees
// @access  Public
router.get('/all', async (req, res) => {
    try {
        let data = await Annee.find({})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/annee/:anneeId
// @desc    Get Single annee
// @access  Public
router.get('/:anneeId', anneeById, async (req, res) => {
    res.json(req.annee)
})

// @route   Put api/annee/:anneeId
// @desc    Update Single annee
// @access  Private Admin
router.put('/:anneeId', auth, adminAuth, anneeById, async (req, res) => {
    let annee = req.annee;
    const {
        user_id,
        date,
        datetime,
        datetimefin
    } = req.body
    if (date) annee.date = date.trim()

    try {
        annee = await annee.save()
        res.json(annee)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

// @route   Delete api/annee/:anneeId
// @desc    Delete Single annee
// @access  Private Admin
router.delete('/:anneeId', auth , adminAuth, anneeById, async (req, res) => {
    let annee = req.annee;
    try {
        let deletedAnnee = await annee.remove()
        res.json({
            message: `${deletedAnnee.date} deleted successfully`
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})
module.exports = router