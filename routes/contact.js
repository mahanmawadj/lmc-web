var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function (req, res) {
    res.render('contact', {
        title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page', address1: 'Lansing Motorcycle Club', address2: 'P.O. Box 15153', address3: 'Lansing, MI 48901'
    });
});

module.exports = router;