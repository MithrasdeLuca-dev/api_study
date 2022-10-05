const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(res) {
	res.send({ hello:'Word' });
});

module.exports = router;
