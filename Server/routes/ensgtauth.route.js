const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // to generate token
const bcrypt = require('bcryptjs'); // encrypt password
const enseignantById = require('../middleware/enseignantById') 
// Check validation for requests
const {
  check,
  validationResult
} = require('express-validator');
const authensgt = require('../middleware/authensgt')
const auth = require('../middleware/auth')
// Models
const Enseignant = require('../models/Enseignant');
const adminAuth = require('../middleware/adminAuth');
const ensgtAuth = require('../middleware/ensgtAuth');

// @route   POST api/user
// @desc    User Information
// @access  Private 
//router.get('/:enseignantId', enseignantById, async (req, res) => {
  //res.json(req.enseignant)
//})
router.get('/id', authensgt,  async (req, res) => {
  
  try {
    // get user information by id 
    const enseignant = await Enseignant.findById(req.enseignant.id).select('-password')
    res.json(enseignant)
    localStorage.setItem('enseignant', enseignant)
    console.log('enseignant', enseignant)
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error')
  }
})
router.get('/' , auth, async (req, res) => {
  try {
      let data = await Enseignant.find({})
      res.json(data)
  } catch (error) {
      console.log(error)
      res.status(500).send('Server error')
  }
})



// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    // validation
    check('nom', 'Nom is required').not().isEmpty(),
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
      nom,
      prenom,
      email,
      cin,
      garade,
      password
    } = req.body;

    try {
      // Check if user already exist
      let enseignant = await Enseignant.findOne({
        email
      });

      // If user exist
      if (enseignant) {
        return res.status(400).json({
          errors: [{
            msg: 'Enseignant already exists',
          }, ],
        });
      }

      // If not exists
      // get image from gravatar
      

      // create user object
      enseignant = new Enseignant({
        nom,
        prenom,
        email,
        cin,
        garade,
        password,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10); // generate salt contains 10
      // save password
      enseignant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
      //save user in databasw
      await enseignant.save();

      // payload to generate token
      const payload = {
        enseignant: {
          id: enseignant.id,
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




// @route   POST api/user/Updatepasword
// @desc    Update password
// @access  Public


router.put('/password/:enseignantId', enseignantById, async (req, res) => {
  let enseignant = req.enseignant;
  const {
      password
  } = req.body



if ( password) 
// encrypt password
salt = await bcrypt.genSalt(10); // generate salt contains 10
// save password
enseignant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
//save user in databasw
  try {
      enseignant = await enseignant.save()
      res.json(enseignant)

// payload to generate token
const payload = {
  enseignant: {
    id: enseignant.id,
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


// @route   POST api/user/Update
// @desc    Update user
// @access  Public


router.put('/:enseignantId', auth, adminAuth, enseignantById, async (req, res) => {
  let enseignant = req.enseignant;
  const {
      nom,
      prenom,
      email,
      cin,
      garade,
      password
  } = req.body



if (nom, prenom, email, cin, garade, password) enseignant.nom = nom.trim()
enseignant.prenom = prenom.trim()
enseignant.email = email.trim()
enseignant.cin = cin.trim()
enseignant.garade = garade.trim()
// encrypt password
const salt = await bcrypt.genSalt(10); // generate salt contains 10
// save password
enseignant.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
//save user in databasw
  try {
      enseignant = await enseignant.save()
      res.json(enseignant)

// payload to generate token
const payload = {
  enseignant: {
    id: enseignant.id,
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



// @route   Delete api/user/:userId
// @desc    Delete Single enseignant
// @access  Private Admin
router.delete('/:enseignantId', auth, adminAuth, enseignantById, async (req, res) => {
  let enseignant = req.enseignant;
  try {
      let deletedEnseignant = await enseignant.remove()
      res.json({
          message: `${deletedEnseignant.nom} deleted successfully`
      })
  } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error');
  }
})



// @route   POST api/user/login
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
    let enseignant = await Enseignant.findOne({
      email
    });

    // If user not found in database
    if (!enseignant) {
      return res.status(400).json({
        errors: [{
          msg: 'Invalid credentials'
        }]
      })
    }

    // Know user founded by email let's compare passwords
    const isMatch = await bcrypt.compare(password, enseignant.password);

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
      enseignant: {
        id: enseignant.id
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