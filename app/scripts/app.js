'use strict';

/*
 * per http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 */
var Lodash = angular.module('lodash', []);

Lodash  
  .factory('_', function() {
    return window._; // assumes lodash has already been loaded on the page
  });

angular.module('trakkerApp', [
  'ngCookies',
  'ngRoute',
  'lodash',
  'Comics',
  'Creators'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
