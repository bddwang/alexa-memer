/* eslint-disable  func-names */
/* eslint-disable  dot-notation */
/* eslint-disable  new-cap */
/* eslint quote-props: ['error', 'consistent']*/
'use strict';

var Alexa = require('alexa-sdk');
var audioData = require('./audioAssets');
var thingtoplay = 0;

var APP_ID = 'amzn1.ask.skill.5996ef2e-0f7b-4180-8ff2-496130389e63';


var newSessionHandlers = {

    'LaunchRequest' : function () {
      var message = 'give me a big meme';
      var reprompt = 'say something';
      this.response.speak(message).listen(reprompt);
      this.emit(':responseReady');
    },

     'PlayAirHorn' : function () {
       controller.play.call(this, 0);
      },

    'PlayTriple' : function () {
      controller.play.call(this, 1);
    },

    'PlaySadViolin' : function () {
      controller.play.call(this, 2);
    },

    'PlayYee' : function () {
      controller.play.call(this, 3);
    },

    'PlayWombo' : function () {
      controller.play.call(this, 4);
    },
    'PlayDance' : function () {
      controller.play.call(this, 5);
    },
    'PlayPrank' : function () {
      controller.play.call(this, 6);
    },
    'PlayIlluminati' : function () {
      controller.play.call(this, 7);
    },
    'PlayKazoo' : function () {
      controller.play.call(this, 8);
    },
    'PlayPlease' : function () {
      controller.play.call(this, 9);
    },
    'PlaySanic' : function () {
      controller.play.call(this, 10);
    },
    'PlayNotOK' : function () {
      controller.play.call(this, 11);
    },
    'PlayWowWink' : function () {
      controller.play.call(this, 12);
    },
    'PlayYeahBoy' : function () {
      controller.play.call(this, 13);
    },
    'PlayRoundabout' : function () {
      controller.play.call(this, 14);
    },

    'AMAZON.PauseIntent' : function () {
      controller.stop.call(this);
      this.emit(':responseReady');
    },

    'AMAZON.ResumeIntent' : function () {
      controller.play.call(this, thingtoplay)
      this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function () {
      var message = 'dude, i am a meme player, i play memes, tell me a meme, like sanic, and i will play the sound. tell me a meme and I will play it';
      this.response.speak(message).listen(message);
      this.emit(':responseReady');
    },

    'AMAZON.StopIntent' : function () {
        controller.stop.call(this);
        var message = 'see ya boy';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function () {
        var message = 'later';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.NextIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.StartOverIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.RepeatIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.ShuffleOnIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.ShuffleOffIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.LoopOnIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'AMAZON.LoopOffIntent' : function () {
        var message = 'sorry we dont support this function';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'SessionEndedRequest' : function () {

    },
    'Unhandled_NORMAL' : function () {
        var message = 'please speak clearly my dude';
        this.response.speak(message).listen(message);
        this.emit(':responseReady');
    },
    'Unhandled' : function () {
        var message = 'please speak clearly my dude';
        this.response.speak(message).listen(message);
        this.emit(':responseReady');
    }
};

var controller = function () {
    return {
        play: function (index)
        {
            thingtoplay = index;
            this.attributes['finished'] = false;
            this.attributes['enqueuedToken'] = null;
            this.response.audioPlayerPlay('REPLACE_ALL', audioData[index].url, "token", null, 0);
            this.emit(':responseReady');
        },
        stop: function () {
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        }
    }
}();


exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandlers);
    alexa.execute();
};
