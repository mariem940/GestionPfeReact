const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config({
  path: './config/index.env',
});
// MongoDB
const connectDB = require('./config/db');
connectDB();

app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/user/', require('./routes/auth.route'));
app.use('/api/enseignant/', require('./routes/ensgtauth.route'));
app.use('/api/etudiant/', require('./routes/etudauth.route'));
app.use('/api/cahier/', require('./routes/cahier.route'));
app.use('/api/annee/', require('./routes/annee.route'));
app.use('/api/validation/', require('./routes/validation.route'));
app.get('/', (req, res) => {
  res.send('test route => home page');
});

// Page Not founded
app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not founded',
  });
});

const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


