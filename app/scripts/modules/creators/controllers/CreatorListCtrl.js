'use strict';

angular.module('Creators')
  .controller('CreatorListCtrl', ['$scope', 'Creators', function($scope, Creators){
    $scope.list = {
      creators: Creators.getAll(),
    };
  
  }]);