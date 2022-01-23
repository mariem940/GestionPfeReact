express = require('express')
const router = express.Router()
const Cahier = require('../models/Cahier')
const Etudiant =require('../models/Etudiant')
const authetud = require('../middleware/authetud')
const etudAuth = require('../middleware/etudAuth')
const cahierById = require('../middleware/cahierById')

const {
    check,
    validationResult
} = require('express-validator')

// @route   POST api/cahier
// @desc    Create Cahier
// @access  Private Etudiant
router.post('/', [
    check('title', 'title is required').trim().not().isEmpty()
], authetud, etudAuth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const {
        title,
        description,
        definition,
        consignes,
        objectifs,
        techniques,
        user_id
    } = req.body
    try {
        let cahier = await Cahier.findOne({
            title
        })

        if (cahier) {
            return res.status(403).json({
                error: 'Cahier already exist'
            })
        }

        const newCahier = new Cahier({
            title,
            description,
            definition,
            consignes,
            objectifs,
            techniques,
            user_id,
        })
        cahier = await newCahier.save()
        res.json(cahier)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/cahier/all
// @desc    Get all cahiers
// @access  Public
router.get('/all', async (req, res) => {
    try {
        let data = await Cahier.find({}).populate('user_id')
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/cahier/:cahierId
// @desc    Get Single cahier
// @access  public
//router.get('/:user_id', cahierByUserId, async (req, res) => {
    //res.json(req.cahier)
//})
router.get('/cahier/:cahierId', cahierById, async (req, res) => {
    res.json(req.cahier)
})

router.get('/:user_id',  async (req, res) => {
    const {
        user_id
    } = req.params
    try {
      // get user information by id 
      const cahier = await Cahier.findOne({user_id}).populate('user_id')
      res.json(cahier)
      localStorage.setItem('cahier', cahier)
      console.log('cahier', cahier)
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server Error')
    }
  })

// @route   Put api/cahier/:cahierId
// @desc    Update Single cahiery
// @access  Private Etudiant
router.put('/:cahierId', cahierById, async (req, res) => {
    let cahier = req.cahier;
    const {
        title,
        description,
        definition,
        consignes,
        objectifs,
        techniques
    } = req.body
    if (title) cahier.title = title.trim()

    try {
        cahier = await cahier.save()
        res.json(cahier)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

// @route   Delete api/cahier/:cahierId
// @desc    Delete Single cahier
// @access  Private Etudiant
router.delete('/:cahierId', cahierById, async (req, res) => {
    let cahier = req.cahier;
    try {
        let deletedCahier = await cahier.remove()
        res.json({
            message: `${deletedCahier.title} deleted successfully`
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})
module.exports = router