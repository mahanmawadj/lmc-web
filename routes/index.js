var express = require('express');
var router = express.Router();
/*
 * GET home page.
 */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
});

module.exports = router;
/*
 *exports.index = function (req, res) {
  *   res.render('index', { title: 'Express', year: new Date().getFullYear() });
 *};
  *
 *exports.about = function (req, res) {
  *   res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
 *};
 *
 *exports.contact = function (req, res) {
  *   res.render('contact', {
   *      title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page', address1: 'Lansing Motorcycle Club', address2: 'P.O. Box 15153', address3: 'Lansing, MI 48901' });
 *}; */
