'use strict';

angular.module('Comics')
  .directive('comicListItem', function () {
    return {
      template: '<div>{{ comic.title }} by {{ comic.writer }}</div>',
      // templateUrl: 'scripts/modules/comics/views/comicListItem.html',
      restrict: 'E'
    };
  });