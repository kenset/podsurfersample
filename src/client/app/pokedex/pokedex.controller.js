(function() {
  'use strict';

  angular
    .module('app.pokedex')
    .controller('PokedexController', PokedexController);

  PokedexController.$inject = ['pokedexFactory', 'logger'];
  
  function PokedexController(pokedexFactory, logger) {
    var vm = this;

    vm.pokedex = {};
    vm.getPokedex = getPokedex;

    activate();

    function activate() {
      getPokedex();
    }

    function getPokedex() {
      var success = function(response) {
        logger.success('Got Pokedex!');
        vm.pokedex = response;
      };

      var error = function(response) {
        logger.error('Failed to get Pokedex');
      };

      pokedexFactory.getPokedex().then(success, error);
    }
  }
})();
