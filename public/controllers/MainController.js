var app = angular.module('ChatBot');

app.controller('MainController', function($scope, $http){
  $scope.chat = [
  ];

  $scope.sendText = function() {
    var chatData = {
      message: $scope.usertext,
      author: "James"
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
