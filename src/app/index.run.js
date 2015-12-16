(function() {
  'use strict';

  angular
    .module('arepachanClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
  	var locale = window.navigator.userLanguage || window.navigator.language;

  	$log.info(locale);
    $log.debug('runBlock end');

  }

})();
