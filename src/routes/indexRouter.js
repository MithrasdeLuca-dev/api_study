const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
	response.send({ hello:'Word' });
});

module.exports = router;
