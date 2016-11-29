# Lightning Math Training with Alexa

Lightning Math training with Alexa, start with: Alexa, ask Lightning Math.

Each math training session consists of 15 questions of varying difficulties. Your score will be tracked

# Installation

```bash
	npm install
```

# Sample Conversations
>
* user: Alexa, ask Lightning Math.
* Alexa: Welcome. ... Are you ready?
* user: No
* Alexa: Cool. Goodbye

>
* user: Alexa, ask Lightning Math.
* Alexa: Welcome to Lunch Spinner. &lt; play Spin-Sound.mp3 /&gt;Have a hard time to decide what and where to have today\'s lunch?  No worries. Let\'s spin the lunch spinner and make a fun choice. Additionally, we will send a fortune cookie quote on your way.
* user: Yes
* Alexa: Question 1: What is 25 * 25?
* user: 625
* Alexa: The answer is correct, your score is 10. Question 2: What is 839 - 233?
* user: 455
* Alexa: The answer is wrong, your score is 10. The correct answer is 606. Question 3: What is 11 * 233?
* user: ...
* Alexa: Good job. You have completed this session. Your score is 70.

# Video Demo

[![Alexa Skill lightning math demo](https://i.ytimg.com/vi/Rq5w0Amwz9Y/default.jpg?sqp=CMTa58EF&rs=AOn4CLD0ztkXMv0qufWSmUedZXtRfqQ3mQ)](https://www.youtube.com/watch?v=ymSAEEHvfhQ)

# Notes

- The app is built using [alexa-server-app by Matt Kruse] (https://github.com/matt-kruse/alexa-app). 

### Custom slot types
```
{
  "intents": [
    {
      "intent": "AMAZON.YesIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.StartOverIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.NoIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.HelpIntent",
      "slots": []
    },
    {
      "intent": "doNotKnowIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.StopIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.CancelIntent",
      "slots": []
    },
    {
      "intent": "answerIntent",
      "slots": [
        {
          "name": "answerSlot",
          "type": "NUMBER"
        }
      ]
    },
    {
      "intent": "AMAZON.RepeatIntent",
      "slots": []
    }
  ]
}

```

### Utterances

```
doNotKnowIntent	Don't Know
doNotKnowIntent	Not Sure
doNotKnowIntent	I do not know
doNotKnowIntent	I don't know
answerIntent	{answerSlot}
answerIntent	The answer is {answerSlot}
```

## History

- 0.0.1 - Nov 11, 2016
  - Submitted to Amazon, waiting for approval
