(function() {
  'use strict';

  angular
    .module('arepachanClient')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


    

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    var customBlueMap = $mdThemingProvider.extendPalette('blue-grey', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
     
     });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
    
    $mdThemingProvider.theme('input', 'default').primaryPalette('grey')

  }

})();
