'use strict';

angular.module('Comics')
  .directive('itemList', function ($compile) {
    return {
      templateUrl: 'views/itemList.html',
      replace: true,
      restrict: 'E',
      transclude: true
    };
  });