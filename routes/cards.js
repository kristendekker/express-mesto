const router = require('express').Router();
const { getCards } = require('../controllers/getCardsInfo.js');

router.get('/', getCards);

module.exports = router;
