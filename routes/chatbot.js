/*
This is the backend for the chatbot. It communicates with API.AI to provide the
speech responses to the user's messages. Everyone must modify this file by
adding their API.AI API key where it says "<add your api key here!>"

If you are going to use MongoDB you will likely need to modify this file to
save and get data.

UPDATE: ADD A SESSION ID
*/

var express = require('express');
var router = express.Router();
var apiai = require('apiai');
var app = apiai("<add your api key here!>");


//send message to chatbot
router.post('/send', function(req, res) {
  var data = req.body;
  var options = {
    sessionId: "Enter a 36 character ID"
  }

  var request = app.textRequest(data.message, options);

  request.on('response', function(response){
    res.status(200).json({status: true, message: response.result.fulfillment.speech});
  });

  request.on('error', function(error){
    console.log(error);
  });

  request.end();



});



module.exports = router;
