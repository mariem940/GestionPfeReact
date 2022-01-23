express = require('express')
const router = express.Router()
const authensgt = require('../middleware/authensgt')
const ensgtAuth = require('../middleware/ensgtAuth')
const validationById = require('../middleware/validationById')
const {
    validationResult
} = require('express-validator')
const Validation = require('../models/Validation')

// @route   POST api/validation
// @desc    Create validation
// @access  Private enseignant
router.post('/', authensgt, ensgtAuth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const {
        cahier_id,
        user_id
    } = req.body
    try {
        let validation = await Validation.findOne({
            cahier_id
        })

        if (validation) {
            return res.status(403).json({
                error: 'Cahier already exist'
            })
        }

        const newValidation = new Validation({
            cahier_id,
            user_id,
        })
        validation = await newValidation.save()
        res.json(validation)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/validation/all
// @desc    Get all validation
// @access  Public
router.get('/all', async (req, res) => {
    try {
        let data = await Validation.find({}).populate('cahier_id').populate('user_id')
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

router.get('/enseignant/:user_id',  async (req, res) => {
    const {
        user_id
    } = req.params
    try {
      // get user information by id 
      const validation = await Validation.findOne({user_id}).populate('cahier_id').populate('user_id')
      res.json(validation)
      localStorage.setItem('validation', validation)
      console.log('validation', validation)
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server Error')
    }
  })

// @route   Get api/category/:categoryId
// @desc    Get Single category
// @access  Public
router.get('/:validationId', authensgt, ensgtAuth, validationById, async (req, res) => {
    res.json(req.validation)
})




module.exports = router