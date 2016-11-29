'use strict';
var chai = require('chai');
var expect = chai.expect;
var MathMagicHelper = require('../math_magic_helper');

describe('MathMagicHelper', function() {
    var mathMagic = new MathMagicHelper();

    it ('get 11s', function () {
        console.log(mathMagic.getMultiplyByElevens(10));

    });

    it ('get square of 5s', function () {
        console.log(mathMagic.getSquareOfFives(10));

    });

    it ('get multipliers of 2 numbers that has the same first digit and the last digits add to 10', function () {
        console.log(mathMagic.getSumOfTenMulplication(5));

    });

    it ('get basic addition questions', function () {
        var questions = mathMagic.getBasicAddition(10);
        for (var i = 0; i < 10; i++) {
            console.log(questions[i]);
        }

    });

    it ('get basic substraction questions', function () {
        var questions = mathMagic.getBasicSubstraction(20);
        for (var i = 0; i < 20; i++) {
            console.log(questions[i]);
        }

    });

    it ('get basic multiplication questions', function () {
        var questions = mathMagic.getBasicMultiplication(20);
        for (var i = 0; i < 20; i++) {
            console.log(questions[i]);
        }

    });
    it ('get warm up question', function () {
        var questions = mathMagic.getWarmUpQuestions(10);
        for (var i = 0; i < 10; i++) {
            console.log(questions[i]);
        }

    });
    it ('get mixed up math question', function () {
        var questions = mathMagic.getMixdedMathMagicQuestions(10);
        for (var i = 0; i < 10; i++) {
            console.log(questions[i]);
        }

    });

});