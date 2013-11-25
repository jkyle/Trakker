'use strict';

angular.module('Comics')
  .directive('creatorListItem', function () {
    return {
      template: '<div>{{ creator.name }}: <span ng-repeat="title in creator.titles">{{ title }} </span></div>',
      // templateUrl: 'scripts/modules/creators/views/creatorListItem.html',
      replace: true,
      restrict: 'E',
      link: function(scope, element, attrs){
      }
    };
  });