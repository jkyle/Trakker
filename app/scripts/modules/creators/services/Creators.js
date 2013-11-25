'use strict';

var Creators = angular.module('Creators', ['lodash']);

Creators
  .factory('Creators', ['_', function(_){
    var Creators = [
      {
        id: 1,
        titles: ['Uncanny X-Force', 'Fear Agent'],
        name: 'Rick Remender',
      },
      {
        id: 2,
        titles: ['Uncanny X-Men', 'Powers'],
        name: 'Brian Michael Bendis',
      },
    ];

    return {
      getAll: function(){
        return Creators;
      },
      get: function(id){
        return _.find(Creators, {id: id});
      },
      find: function(field, value){
        return _.filter(Creators, function(creator){
          return creator[field] === value;
        });
      }
    };

  }]);