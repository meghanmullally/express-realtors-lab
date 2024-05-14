const express = require('express');

/* --------- MIDDLEWARE --------- */
const cors = require('cors');
const logger = require('morgan');
const apartmentRouter = require('./routes/apartments');
const houseRouter = require('./routes/houses');

const PORT = process.env.PORT || 3000;
const app = express();

/* --------- MIDDLEWARE USAGE --------- */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

/* --------- ROUTES --------- */
app.get('/', function (req, res) {
    res.json({ msg: 'Server Running!' })
})

app.use('/apartments', apartmentRouter);
app.use('/houses', houseRouter);

// this code should remain at the bottom of the file
app.listen(PORT, function () {
    console.log(`Sever is running on ${PORT}`);
});