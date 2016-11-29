'use strict';
var chai = require('chai');
var expect = chai.expect;
var QuestionHelper = require('../question_helper');

describe('MathMagicHelper', function() {
    var questionHelper = new QuestionHelper();

    it ('get 11s', function () {
        console.log(questionHelper.randomizeQuestions([15, 25, 35, 45, 55, 65, 75, 85, 95, 10], 5));


    });

});