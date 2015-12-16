(function() {
  'use strict';

  angular
      .module('arepachanClient')
      .service('FeedService', FeedService);

  /** @ngInject */
  function FeedService($http,$q) {

    this.getPosts = getPosts;
    this.like =  like;
    this.unlike = unLike;

    var deferred = $q.defer();

    function getPosts(page) {
      return $http({
        url: 'http://localhost:3000/api/v1/post_data.json', 
        method: 'GET',
        params: {page: page}
      }).then(function (resp) {
        
        return resp;

      }).catch(function(err){
        console.log('XHR Failed for getAvengers.' + err.data);
      });
    }

    function like(postIdUnique){
      return $http({
        url: 'http://localhost:3000/api/v1/post_data/like.json',
        method: 'POST',
        params: {
          postId: postIdUnique
        }
      }
      ).then(function(resp){
          return resp;

      }).catch(function(err){
        console.log('XHR Failed for getAvengers.' + err.data);
      });
    }

    function unLike(postIdUnique){
      return $http({
        url: 'http://localhost:3000/api/v1/post_data/unlike.json',
        method: 'POST',
        params: {
          postId: postIdUnique
        }
      }
      ).then(function(resp){
          return resp;

      }).catch(function(err){
        console.log('XHR Failed for getAvengers.' + err.data);
      });
    }
  }

})();
