var alexa = require('alexa-app');
var IntentHandler = require('./intent_handler');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var app = new alexa.app('lightning-math-training');
var IntentHandler= new IntentHandler();
var YesIntent  = IntentHandler.yesIntent,
    NoIntent = IntentHandler.noIntent,
    HelpIntent = IntentHandler.helpIntent,
    AnswerIntent = IntentHandler.answerIntent,
    RepeatIntent = IntentHandler.repeatIntent,
    StopIntent = IntentHandler.stopIntent,
    CancelIntent = IntentHandler.cancelIntent,
    StartOverIntent = IntentHandler.startOverIntent,
    DonotKnowInent = IntentHandler.dontKnowIntent;

app.launch(function(req,res) {
   IntentHandler.handleLaunchRequest(req, res);
});

app.intent(YesIntent.name, YesIntent.utterances, function (req, res) {
    YesIntent.callFunc(req, res);
});

app.intent(StartOverIntent.name, StartOverIntent.utterances, function (req, res) {
    StartOverIntent.callFunc(req, res);
});

app.intent(YesIntent.name, YesIntent.utterances, function (req, res) {
    YesIntent.callFunc(req, res);
});

app.intent(NoIntent.name, NoIntent.utterances, function (req,res) {
    NoIntent.callFunc(req, res);
});

app.intent(HelpIntent.name, HelpIntent.utterances, function (req,res) {
    HelpIntent.callFunc(req, res);
});

app.intent(DonotKnowInent.name, DonotKnowInent.utterances, function (req, res) {
    DonotKnowInent.callFunc(req, res);
});

app.intent(StopIntent.name, StopIntent.utterances, function (req,res) {
    StopIntent.callFunc(req, res);
});

app.intent(CancelIntent.name, CancelIntent.utterances, function (req,res) {
    CancelIntent.callFunc(req, res);
});

app.intent(AnswerIntent.name, AnswerIntent.utterances, function (req, res) {
    AnswerIntent.callFunc(req, res);
});

app.intent(RepeatIntent.name, RepeatIntent.utterances, function (req, res) {
    RepeatIntent.callFunc(req, res);
});


module.exports = app;
