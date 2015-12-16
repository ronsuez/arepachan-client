(function() {
  'use strict';

  angular
    .module('arepachanClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, FeedService, toastr) {
    var vm = this;

    vm.posts = [];
    vm.page = 1;
    vm.classAnimation = '';
    vm.creationDate = 1443463640280;
    vm.showToastr = false;
    vm.loadingBar = false;
    vm.loadMore = loadMore;
    vm.likePost = likePost;
    vm.unlikePost = unlikePost;
    activate();

    //FAB button

      vm.topDirections = ['left', 'up'];
      vm.bottomDirections = ['down', 'right'];
      vm.isOpen = false;
      vm.availableModes = ['md-fling', 'md-scale'];
      vm.selectedMode = 'md-fling';
      vm.availableDirections = ['up', 'down', 'left', 'right'];
      vm.selectedDirection = 'up';

    function activate() {
      getFeed();
    }

    function loadMore(){
      getFeed();
    }

    function getFeed(){
      return FeedService.getPosts(vm.page).then(function(resp){
        console.log(resp.headers());
        console.log(resp.data);
        for (var i = 0; i < resp.data.length; i++) {
          vm.posts.push(resp.data[i]);
        };
        vm.page++;
        return vm.posts;
      });
    }

    function likePost(index, post){
       return FeedService.like(post).then(function(resp){
        return vm.posts[index] = resp.data;
      });
    }

    function unlikePost(index, post){
      return FeedService.unlike(post).then(function(resp){
        return vm.posts[index] = resp.data;
      });
    }
  }
})();
