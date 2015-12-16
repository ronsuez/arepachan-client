(function() {
  'use strict';

  angular
    .module('arepachanClient')
    .directive('infinityScroll', infinityScroll);

  /** @ngInject */
  function infinityScroll() {
    var directive = {
      restrict: 'A',
      scope: {
        callback: '&infinityScroll'
      },
      link: activateScroll
    };

    return directive;

      function activateScroll(scope, element, attr) {

        scope.$on('$destroy', function () {
          jQuery('div[ui-view="content"].content').scrollTop(0);
          jQuery('div[ui-view="content"].content').unbind('scroll');
        });

        jQuery('div[ui-view="content"].content').scroll(function() {
          if (jQuery('div[ui-view="content"].content').scrollTop() === (jQuery('div[ui-view="venue"]').height() - jQuery('div[ui-view="content"].content').height())) {
            scope.callback();
          }
        });
     }
    }

  /** @ngInject */
  function MalarkeyController($log, githubContributor) {
    var vm = this;

    vm.contributors = [];

    activate();

    function activate() {
      return getContributors().then(function() {
        $log.info('Activated Contributors View');
      });
    }

    function getContributors() {
      return githubContributor.getContributors(10).then(function(data) {
        vm.contributors = data;

        return vm.contributors;
      });
    }
  }
})();
