const router = require('express').Router();
const { Question } = require('../../../models');

<<<<<<< HEAD
router.get('/', (req,res) => {
    Question.findAll({
        attributes: [
            'id',
            'question_text',
            'choice1',
            'choice2',
            'choice3',
            'choice4'
        ],
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:quiz_id', (req, res) => {
    Question.findOne({
        where: {
            quiz_id: req.params.quiz_id
        }
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

/* router.post('/', (req,res) => {
    Question.create({
        question_text: req.body.question_text,
       
    })
}) */

=======
router.get('/:quiz_id', (req,res) => {
    Question.findOne({})
    .then()
})
>>>>>>> 81d566d759ca8ab6bc34c038545592bf5ae187f6

module.exports = router;