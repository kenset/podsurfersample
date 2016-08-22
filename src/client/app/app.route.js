(function() {
  'use strict';

  angular
    .module('app')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/',
          templateUrl: 'app/app.home.html',
          title: 'home',
          settings: {
            nav: 1,
            content: 'Home'
          }
        }
      }
    ];
  }
})();
