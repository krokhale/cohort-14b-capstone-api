var express = require('express');
var router = express.Router();
let {Category, Answer, Question} = require('../lib/models')


//GET http://localhost:3000/api/v1/categories
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({})
    res.json(categories)
});


/* GET home page. */
router.get('/test', function(req, res, next) {
    res.json({success: true})
});

module.exports = router;
