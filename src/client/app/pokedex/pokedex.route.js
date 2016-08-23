(function() {
  'use strict';

  angular
    .module('app.pokedex')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'pokedex',
        config: {
          url: '/pokedex',
          templateUrl: 'app/pokedex/pokedex.html',
          controller: 'PokedexController',
          controllerAs: 'pokedexCtrl',
          title: 'pokedex',
          settings: {
            nav: 2,
            content: 'Pokedex'
          }
        }
      },
      {
        state: 'pokedex-controller',
        config: {
          url: '/pokedex/controller',
          templateUrl: 'app/pokedex/pokedex-controller-sample.html',
          settings: {
            nav: 3,
            content: 'pokedex.controller.js'
          }
        }
      },
      {
        state: 'pokedex-factory',
        config: {
          url: '/pokedex/factory',
          templateUrl: 'app/pokedex/pokedex-factory-sample.html',
          settings: {
            nav: 4,
            content: 'pokedex.factory.js'
          }
        }
      },
      {
        state: 'pokedex-html',
        config: {
          url: '/pokedex/html',
          templateUrl: 'app/pokedex/pokedex-html-sample.html',
          settings: {
            nav: 5,
            content: 'pokedex.html.js'
          }
        }
      },
      {
        state: 'pokedex-route',
        config: {
          url: '/pokedex/route',
          templateUrl: 'app/pokedex/pokedex-route-sample.html',
          settings: {
            nav: 6,
            content: 'pokedex.route.js'
          }
        }
      },
      {
        state: 'pokedex-module',
        config: {
          url: '/pokedex/module',
          templateUrl: 'app/pokedex/pokedex-module-sample.html',
          settings: {
            nav: 7,
            content: 'pokedex.module.js'
          }
        }
      }
    ];
  }
})();
