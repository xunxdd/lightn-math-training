'use strict';

function QuestionHelper() {

    QuestionHelper.prototype.getAdditionQuestion = getAdditionQuestion;
    QuestionHelper.prototype.getMultiplicationQuestion = getMultiplicationQuestion;
    QuestionHelper.prototype.getSubtractionQuestion = getSubtractionQuestion;
    QuestionHelper.prototype.getDivisionQuestion = getDivisionQuestion;
    QuestionHelper.prototype.randomizeQuestions = randomizeQuestions;

    function getAdditionQuestion(n1, n2) {
        return {
            text: 'What is the sum of ' + n1 + ' and ' + n2 + '?',
            answer: (n1 + n2)
        };
    }

    function getSubtractionQuestion(n1, n2) {
        var x1 = Math.max(n1, n2),
            x2 = Math.min(n1, n2);
        return {
            text: 'What is ' + x1 + ' minus ' + x2 + '?',
            answer: (x1 - x2)
        };
    }

    function getMultiplicationQuestion(n1, n2) {
        return {
            text: 'What is the product of ' + n1 + ' and ' + n2 + '?',
            answer: (n1 * n2)
        };
    }

    function getDivisionQuestion(n1, n2) {
        var x1 = Math.max(n1, n2),
            x2 = Math.min(n1, n2);
        return {
            text: 'What is the result of ' + x1 + ' divided by ' + x2 + '? Please round the result to the nearest integer',
            answer: Math.round (x1 / x2)
        }
    }

    function randomizeQuestions(questions, len) {
        var index = questions.length,
            questionSet = [],
            len = Math.min(len, questions.length) ;
        for (var j = 0; j < questions.length; j++){
            var rand = Math.floor(Math.random() * index);
            index -= 1;
            var temp = questions[index];
            questions[index] = questions[rand];
            questions[rand] = temp;
            questionSet.push(questions[index]);
        }

        return questionSet.slice(1, len+1);
    }
}

module.exports = QuestionHelper;