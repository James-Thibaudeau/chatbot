/*
This is the angular controller for the ChatBot
this sends input to the backend and gets the responses
for the front end to display in the UI
*/

var app = angular.module('ChatBot');

app.controller('MainController', function($scope, $http){
  $scope.limit = 6;
  $scope.chat = [
  ];

  $scope.sendText = function() {
    var chatData = {
      message: $scope.usertext,
      author: "User"
    };

    var botData = {
      message: '',
      author: 'ChatBot'
    };

    $scope.chat.push(chatData);
    $scope.usertext = '';

    $http.post('/chat/send', chatData)
      //handle success
      .success(function(data) {
        botData.message = data.message;
        $scope.chat.push(botData);
      })
      //handle error
      .error(function(data) {
        console.log('error');
      });
  };

});
