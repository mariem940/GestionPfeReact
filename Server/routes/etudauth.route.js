const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // to generate token
const bcrypt = require('bcryptjs'); // encrypt password
// Check validation for requests
const {
  check,
  validationResult
} = require('express-validator');
const authetud = require('../middleware/authetud')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/auth')
const etudiantById = require('../middleware/etudiantById')
// Models
const Etudiant = require('../models/Etudiant');



// @route   Get api/etudiant/all
// @desc    Get all etudiants
// @access  Admin
router.get('/all', auth,  async (req, res) => {
  try {
      let data = await Etudiant.find({})
      res.json(data)
  } catch (error) {
      console.log(error)
      res.status(500).send('Server error')
  }
})


// @route   POST api/user
// @desc    User Information
// @access  Private 
router.get('/id', authetud,  async (req, res) => {
  try {
    // get user information by id 
    const etudiant = await Etudiant.findById(req.etudiant.id).select('-password')
    res.json(etudiant)
    localStorage.setItem('etudiant', etudiant)
    console.log('etudiant', etudiant)
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error')
  }
})
// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    // validation
    check('nomutilisateur', 'Nom utilisateur is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ], auth, adminAuth, 
  async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    // get name and email and password from request
    const {
      nomutilisateur,
      email,
      cin,
      numcarte,
      password
    } = req.body;

    try {
      // Check if user already exist
      let etudiant = await Etudiant.findOne({
        email
      });

      // If user exist
      if (etudiant) {
        return res.status(400).json({
          errors: [{
            msg: 'Etudiant already exists',
          }, ],
        });
      }

      // If not exists
      // get image from gravatar
      

      // create user object
      etudiant = new Etudiant({
        nomutilisateur,
        email,
        cin,
        numcarte,
        password,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10); // generate salt contains 10
      // save password
      etudiant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
      //save user in databasw
      await etudiant.save();

      // payload to generate token
      const payload = {
        etudiant: {
          id: etudiant.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET, {
          expiresIn: 120, // for development for production it will 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token
          });
        }
      );
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);






// @route   POST api/etudiant/Update
// @desc    Update etudiant
// @access  Public


router.put('/:etudiantId', auth, adminAuth, etudiantById, async (req, res) => {
  let etudiant = req.etudiant;
  const {
      nomutilisateur,
      email,
      cin,
      numcarte,
      password
  } = req.body



if (nomutilisateur, email, cin, numcarte, password) etudiant.nomutilisateur = nomutilisateur.trim()
etudiant.email = email.trim()
etudiant.cin = cin.trim()
etudiant.numcarte = numcarte.trim()
// encrypt password
const salt = await bcrypt.genSalt(10); // generate salt contains 10
// save password
etudiant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
//save user in databasw
  try {
      etudiant = await etudiant.save()
      res.json(etudiant)

// payload to generate token
const payload = {
  etudiant: {
    id: etudiant.id,
  },
};

jwt.sign(
  payload,
  process.env.JWT_SECRET, {
    expiresIn: 360000, // for development for production it will 3600
  },
  (err, token) => {
    if (err) throw err;
    res.json({
      token
    });
  }
);


  } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error');
  }
})

// @route   POST api/user/Updatepasword
// @desc    Update password
// @access  Public

router.put('/password/:etudiantId', etudiantById, async (req, res) => {
  let etudiant = req.etudiant;
  const {
      password
  } = req.body



if ( password) 
// encrypt password
salt = await bcrypt.genSalt(10); // generate salt contains 10
// save password
etudiant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
//save user in databasw
  try {
      etudiant = await etudiant.save()
      res.json(etudiant)

// payload to generate token
const payload = {
  etudiant: {
    id: etudiant.id,
  },
};

jwt.sign(
  payload,
  process.env.JWT_SECRET, {
    expiresIn: 160, // for development for production it will 3600
  },
  (err, token) => {
    if (err) throw err;
    res.json({
      token
    });
  }
);


  } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error');
  }
})



// @route   Delete api/etudiant/:etudiantId
// @desc    Delete Single etudiant
// @access  Private Admin
router.delete('/:etudiantId', auth, adminAuth, etudiantById, async (req, res) => {
  let etudiant = req.etudiant;
  try {
      let deletedEtudiant = await etudiant.remove()
      res.json({
          message: `${deletedEtudiant.nomutilisateur} deleted successfully`
      })
  } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error');
  }
})






// @route   POST api/etudiant/login
// @desc    Login user
// @access  Public
router.post('/login', [
  // Validation for email and password
  check('email', 'please include a valid email').isEmail(),
  check('password', 'password is required').exists()
], async (req, res) => {
  // If error 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  // if everything is good
  // get email and password from request body
  const {
    email,
    password
  } = req.body;

  try {
    // find user
    let etudiant = await Etudiant.findOne({
      email
    });

    // If user not found in database
    if (!etudiant) {
      return res.status(400).json({
        errors: [{
          msg: 'Invalid credentials'
        }]
      })
    }

    // Know user founded by email let's compare passwords
    const isMatch = await bcrypt.compare(password, etudiant.password);

    // passwords don't match
    if (!isMatch) {
      return res.status(400).json({
        errors: [{
          msg: 'Invalid credentials'
        }]
      })
    }

    // payload for jwt
    const payload = {
      etudiant: {
        id: etudiant.id
      }
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET, {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        res.json({
          token
        })
      }
    )
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
})



module.exports = router