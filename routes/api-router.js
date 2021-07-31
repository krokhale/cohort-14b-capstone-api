var express = require('express');
var router = express.Router();
let {Category, Answer, Question} = require('../lib/models')


//GET http://localhost:3000/api/v1/categories
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({})
    res.json(categories)
});

// http://localhost:3000/api/v1/questions?categoryId=4 //req.query
// http://localhost:3000/api/v1/categories/4/questions //req.params
router.get('/categories/:categoryId/questions', async function(req, res, next) {
    // HINT: req.query, req.query.categoryId
    console.log(req.params)
    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}})
    res.json(questions)
});

// Create a question
// POST http://localhost:3000/api/v1/categories/:categoryId/questions
// POST http://localhost:3000/api/v1/categories/1/questions
// POST http://localhost:3000/api/v1/categories/3/questions
router.post('/categories/:categoryId/questions', async function(req, res, next) {
    console.log(req.body)
    console.log(req.params)
    req.body.categoryId = parseInt(req.params.categoryId)
    console.log(req.body)
    let question = await Question.create(req.body)
    res.json(question)
    // let categories = await Category.findAll({})
    // res.json(categories)
});

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.json({success: true})
});

module.exports = router;
