'use strict';

angular.module('Comics')
  .controller('ComicListCtrl', ['$scope', 'ComicBooks', function($scope, ComicBooks){
    $scope.list = {
      comics: ComicBooks.getAll(),
    };
  
  }]);