'use strict';

angular.module('Comics', ['lodash'])
  .factory('ComicBooks', ['_', function(_){
    var ComicBooks = [
      {
        id: 1,
        title: 'Uncanny X-Force',
        writer: 'Rick Remender',
        imgSrc: 'http://static.comicvine.com/uploads/scale_large/7/71975/2758802-prv14583_cov.jpg'
      },
      {
        id: 2,
        title: 'Fear Agent',
        writer: 'Rick Remender',
        imgSrc: 'http://static.comicvine.com/uploads/scale_large/6/67663/2658367-01.jpg'
      },
      {
        id: 3,
        title: 'Uncanny X-Men',
        writer: 'Brian Michael Bendis',
        imgSrc: 'http://static.comicvine.com/uploads/scale_large/6/67663/2867444-01f.jpg'
      },
      {
        id: 4,
        title: 'Powers',
        writer: 'Brian Michael Bendis',
        imgSrc: 'http://static.comicvine.com/uploads/scale_large/0/4/41058-6472-46334-1-powers.jpg'
      }
    ];

    return {
      getAll: function(){
        return ComicBooks;
      },
      get: function(id){
        return _.find(ComicBooks, {id: id});
      },
      find: function(field, value){
        return _.filter(ComicBooks, function(comicBook){
          return comicBook[field] === value;
        });
      }
    };

  }]);