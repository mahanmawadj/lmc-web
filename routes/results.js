var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res) {
    res.render('results', { title: 'LMC - Past Race Results.', year: new Date().getFullYear(), message: 'Your application description page' });
});

module.exports = router;