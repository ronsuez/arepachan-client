(function() {
  'use strict';

  angular
    .module('arepachanClient')
    .directive('arepachanNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: {
        page: '='
      }
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $scope) {
      var vm = this;
      vm.showSearch = false;
      vm.showListBottomSheet = showListBottomSheet;


      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      function showListBottomSheet(){
          console.log('click');
      }
    }
  }

})();
