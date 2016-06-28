var express = require('express');
var router = express.Router();
var apiai = require('apiai');
var app = apiai("<add your api key here!>");


//send message to chatbot
router.post('/send', function(req, res) {
  var data = req.body;

  var request = app.textRequest(data.message);

  request.on('response', function(response){
    res.status(200).json({status: true, message: response.result.fulfillment.speech});
  });

  request.on('error', function(error){
    console.log(error);
  });

  request.end();



});



module.exports = router;
