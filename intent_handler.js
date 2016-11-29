'use strict';

var MathMagicHelper = require("./math_magic_helper");

function IntentHandler() {
    var MathMagic = new MathMagicHelper();
    var totalLen = 15;
    var questions = MathMagic.getFinalMixedQuestionsSet(totalLen);
    var getStartedText ='Would you like to get started?',
        welcomeText = 'Welcome to Lightning Math Training Session. ' +
            'In each session, you will hear some math questions including ' +
            'addition, subtraction, multiplication and division math problems.  ' +
            'You are expected to complete all of the math problems with only your brain. Try not to use any paper and pencils. ' +
            'To help us better understand you, please just respond the answer with the name of each digit. For example, 123, one two three. ' +
            getStartedText;

    var yesIntent= {
        name: "AMAZON.YesIntent",
        utterances: {},
        callFunc: HanleYesIntent
    } ;

    var noIntent = {
        name: "AMAZON.NoIntent",
        utterances: {},
        callFunc: goodBye
    };

    var startOverIntent = {
        name: "AMAZON.StartOverIntent",
        utterances: {},
        callFunc: handleStartOverIntent
    };

    var helpIntent = {
            name: 'AMAZON.HelpIntent',
            utterances: {},
            callFunc: handleHelpIntent
        },
        cancelIntent = {
            name: 'AMAZON.CancelIntent',
            utterances: {},
            callFunc: goodBye
        },
        repeatIntent = {
            name: 'AMAZON.RepeatIntent',
            utterances: {},
            callFunc: handleRepeatIntent
        },
        stopIntent = {
            name: 'AMAZON.StopIntent',
            utterances: {},
            callFunc: goodBye
        };

    var answerIntent = {
       "utterances":{
            "slots":{"answerSlot":"NUMBER"}
            ,"utterances":["{|The answer is }{-|answerSlot}"]
        },
        name: 'answerIntent',
        callFunc: handleAnswerIntent
    };

    var donotKnowIntent = {
        "utterances":{
           "utterances":["{|hmm, } {Don't Know| Not Sure | I do not know | I don't know}"]
        },
        name: 'doNotKnowIntent',
        callFunc: handleDontKnowIntent
    };

    function handleStartOverIntent(req, res) {
        res.session('currentQuestion', null);

        handleLaunchRequest(req, res);
    }

    function handleRepeatIntent(req, res) {
        var currentQuestion = req.session('currentQuestion');

        if (!currentQuestion) {
            handleLaunchRequest(req, res);
        } else {
            res.say(currentQuestion.questionText).reprompt(currentQuestion.questionText).shouldEndSession(false);
        }
    }

    function handleDontKnowIntent(req, res) {
        handleResultGoToNext(req, res, 'donotknow');
    }

    function handleResultGoToNext(req, res, answer) {
        var currentQuestion = req.session('currentQuestion');

        var output = 'You answered ' + answer + '. ';
        var isCorrect = parseInt(answer) === parseInt(currentQuestion.question.answer) ;
        var scoreTotal = currentQuestion.score;
        var questionIndex = parseInt(currentQuestion.questionIndex) ;
        scoreTotal = parseInt(scoreTotal) + (isCorrect? 10 : 0);
        var result =  'The answer is ' + (isCorrect? 'correct' : 'wrong') + '. Your score is ' + scoreTotal.toString() + '. ';

        if (answer === 'donotknow') {
            output = '';
            result = 'Your score is ' + scoreTotal.toString() + '. ';
        }

        var correctAnswer = isCorrect? '' : 'The correct answer is ' + currentQuestion.question.answer.toString() + '. ';
        var nextQuestion;

        if (questionIndex < totalLen) {
            nextQuestion = getSectionNextQuestion(questionIndex, questions, scoreTotal);
            res.session('currentQuestion', nextQuestion);
            res.say(output +  result + correctAnswer + nextQuestion.questionText);
            res.reprompt(nextQuestion.questionText);
            res.shouldEndSession(false);
        } else if (questionIndex >= totalLen) {
            var summery = getSectionCompleteOutput(currentQuestion);
            res.say(output + result+   correctAnswer + summery);
            res.shouldEndSession(true);
        }
    }
    function handleAnswerIntent(req, res) {
        var answer = req.slot('answerSlot');
        var currentQuestion = req.session('currentQuestion');
        if (!answer || isNaN(parseInt(answer))) {
            res.say("Sorry, I didn't hear a answer or an answer in numbers. " + currentQuestion.questionText);
            res.reprompt(currentQuestion.questionText);
            res.shouldEndSession(false);
        } else {
            handleResultGoToNext(req, res, answer);
        }
    }

    function getSectionCompleteOutput(currentQuestion) {
        return 'Good job. You have completed the math section.'
                    + ' Your total score for this section is ' + currentQuestion.score + '. '
                    + ' It was a pleasure doing math with you. Goodbye';
    }

    function getSectionNextQuestion(questionIndex, questions, scoreTotal) {
        var nextQuestion = getQuestion(questionIndex + 1, questions, scoreTotal);

        return nextQuestion;
    }

    function HanleYesIntent(req, res) {
        var currentQuestionIndex = 1,
            score = 0,
            question = getQuestion(currentQuestionIndex, questions, score);

        res.say("Great! Let's start.  "  + question.questionText);
        res.session('currentQuestion', question);
        res.shouldEndSession(false);
    }

    function getQuestion(index, questions, score) {
        var questionIndex = index-1,
            question = questionIndex> (questions.length-1)? questions[0] : questions[questionIndex];

        return {
            questionText: 'Question ' + index +  ', ' + question.text,
            score: score,
            questionIndex: index,
            question: question
        };
    }
    
    function goodBye(req, res) {
        res.say('Cool. Talk to you later, then. Keep up your lightning Math! Goodbye!');
        res.shouldEndSession(true);
    }

    function handleHelpIntent(req, res) {
        var session = res.session;
        if (!session.attributes) {
            session.attributes = {};
        }

        session.attributes.userPromptedToContinue = true;

        var speechOutput = "I will ask you some math questions. Respond with the number of the answer. "
                + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
                + "To repeat the last question, say, repeat. "
                + "Would you like to keep playing?",
            repromptText = "To give an answer to a question, respond with the number of the answer . "
                + "Would you like to keep playing?";

        res.say(speechOutput);
        res.reprompt(repromptText);
        res.shouldEndSession(false);
    }

    function handleLaunchRequest(req, res) {
        res.say(welcomeText).reprompt(getStartedText).shouldEndSession(false);
    }

    return {
        yesIntent: yesIntent,
        noIntent: noIntent,
        helpIntent: helpIntent,
        answerIntent: answerIntent,
        repeatIntent: repeatIntent,
        cancelIntent: cancelIntent,
        stopIntent: stopIntent,
        startOverIntent: startOverIntent,
        dontKnowIntent: donotKnowIntent,
        handleLaunchRequest: handleLaunchRequest
    };
}

module.exports = IntentHandler;