(function() {
  'use strict';

  angular
    .module('app.pokedex')
    .controller('PokedexController', PokedexController);

  PokedexController.$inject = ['pokedexFactory', 'logger'];
  /* @ngInject */
  function PokedexController(pokedexFactory, logger) {
    var vm = this;

    vm.pokedex = {};

    activate();

    function activate() {
      getPokemon();
    }

    function getPokemon() {
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
