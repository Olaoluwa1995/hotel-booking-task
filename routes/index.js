const { getHotels, getHotel, bookHotel } = require('../controllers/hotel-controller');
const { Validate } = require('../utils/validate');
const CreateUserSchema = require('./validations/book-validatoin');

const router = require('express').Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels/:id/book/:roomId', Validate(CreateUserSchema), bookHotel)

module.exports = router;