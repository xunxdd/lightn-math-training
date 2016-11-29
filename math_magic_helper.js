'use strict';

var QuestionHelper = require('./question_helper');

function MathMagicHelper() {

    MathMagicHelper.prototype.getMultiplyByElevens = getMultiplyByElevens;
    MathMagicHelper.prototype.getSquareOfFives = getSquareOfFives;
    MathMagicHelper.prototype.getSumOfTenMulplication = getSumOfTenMulplication;
    MathMagicHelper.prototype.getBasicAddition = getBasicAddition;
    MathMagicHelper.prototype.getBasicSubstraction = getBasicSubstraction;
    MathMagicHelper.prototype.getBasicMultiplication = getBasicMultiplication;
    MathMagicHelper.prototype.getBasicDivision = getBasicDivision;
    MathMagicHelper.prototype.getWarmUpQuestions = getWarmUpQuestions;
    MathMagicHelper.prototype.getMixdedMathMagicQuestions = getMixdedMathMagicQuestions;
    MathMagicHelper.prototype.getFinalMixedQuestionsSet = getFinalMixedQuestionsSet;

    var questionHelper = new QuestionHelper();

    function getMultiplyByElevens(len) {
        var questions = [],
            prevRandom =0;
        for (var i = 0; i < len; i++) {
            var random = Math.ceil(Math.random() * (100) + 1);
            while(random === prevRandom) {
                random = Math.ceil(Math.random() * (100) + 1);
            }
            questions.push(questionHelper.getMultiplicationQuestion(random, 11));
            prevRandom = random;
        }
        return questions;
    }

    function getSquareOfFives(len) {

        var questions = [];
        var number;
        for (var i = 9; i > 1; i--) {
            number = i * 10 + 5;
            questions.push(questionHelper.getMultiplicationQuestion(number, number));
        }

        return questionHelper.randomizeQuestions(questions, len);
    }

    function getSumOfTenMulplication(len) {

        var questions = [];
        var n1, n2, x1, x2;
        for (var i = 1; i < 10; i++) {
            n1 = Math.floor(Math.random() * 9 + 1);
            x1 = Math.floor(Math.random() * 9 + 1);
            x2 = 10 - x1;
            questions.push(questionHelper.getMultiplicationQuestion((n1 * 10 + x1), (n1*10 +x2)));
        }

        return questionHelper.randomizeQuestions(questions, len);
    }

    function getBasicAddition(len) {

        var questions = [];
        var firstHalf = Math.floor(len / 2);
        for (var i = 0; i < firstHalf; i++) {
            var n1 = parseInt(Math.random() * (100) + 10),
                n2 = parseInt(Math.random() * (100) + 10);

            questions.push(questionHelper.getAdditionQuestion(n1, n2));
        }

        for (var i = 0; i < (len - firstHalf); i++) {
            var n1 = parseInt(Math.random() * (1000) + 100),
                n2 = parseInt(Math.random() * (1000) + 100);

            while (n2 === n1) {
                n2 = parseInt(Math.random() * (1000) + 100);
            }
            questions.push(questionHelper.getAdditionQuestion(n1, n2));
        }
        return questions;
    }

    function getBasicSubstraction(len) {

        var questions = [];
        var firstHalf = Math.floor(len / 2);
        for (var i = 0; i < firstHalf; i++) {
            var n1 = getRandomNumber(100, 10),
                n2 = n1;

            while (n2 === n1) {
                n2 = getRandomNumber(100, 10);
            }

            questions.push(questionHelper.getSubtractionQuestion(n1, n2));
        }

        for (var i = 0; i < (len - firstHalf); i++) {
            var n1 = getRandomNumber(1000, 100),
                n2 = n1;

            while (n2 === n1) {
                n2 = getRandomNumber(1000, 100);
            }
            questions.push(questionHelper.getSubtractionQuestion(n1, n2));
        }

        return questions;
    }

    function getRandomNumber(seed, base) {
        return parseInt(Math.random() * (seed) + base);
    }

    function getBasicMultiplication(len) {

        var questions = [];
        for (var i = 0; i < len; i++) {
            var n1 = getRandomNumber(100, 10),
                n2 = n1;

            while (n2 === n1) {
                n2 = getRandomNumber(100, 10);
            }

            questions.push(questionHelper.getMultiplicationQuestion(n1, n2));
        }
        return questions;
    }

    function getBasicDivision(len) {

        var questions = [];
        for (var i = 0; i < len; i++) {
            var n1 = getRandomNumber(100, 900),
                n2 = getRandomNumber(900, 100);

            questions.push(questionHelper.getDivisionQuestion(n1, n2));
        }
        return questions;
    }

    function getWarmUpQuestions(len) {

        var qlen = Math.floor(len / 3),
            multiplyByElevens = getMultiplyByElevens(qlen),
            squareOfFives = getSquareOfFives(qlen),
            sumOfTenMultiples = getSumOfTenMulplication(len - (qlen * 2)),
            questions = multiplyByElevens.concat(squareOfFives).concat(sumOfTenMultiples);

        return questions;
    }

    function getMixdedMathMagicQuestions(len) {
        var minLen = Math.min(len, 12),
            setLen = Math.floor(minLen/3),
            additionQuestions = getBasicAddition(setLen),
            multiplyQuestions = getBasicMultiplication(setLen),
            subtractionQuestions = getBasicSubstraction(setLen),
            divisionQuestions = getBasicDivision(setLen),
            questions = additionQuestions.concat(multiplyQuestions).concat(subtractionQuestions).concat(divisionQuestions);

        return questionHelper.randomizeQuestions(questions, minLen);
    }

    function getFinalMixedQuestionsSet(len) {
         var questions1 = getWarmUpQuestions(len),
             questions2 = getMixdedMathMagicQuestions(len),
             completeQuestions = questions1.concat(questions2);

        var questions = questionHelper.randomizeQuestions(completeQuestions, len);
        return questions;
    }

}

module.exports = MathMagicHelper;