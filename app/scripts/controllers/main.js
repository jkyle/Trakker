'use strict';

angular.module('trakkerApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    var app = $scope.app = {};
    app.state = 'comics';
    app.user = 'JWin';

    $scope.showComics = function(){
      app.state = 'comics';
    }
    
    $scope.showCreators = function(){
      app.state = 'creators';
    }
  
  }]);
