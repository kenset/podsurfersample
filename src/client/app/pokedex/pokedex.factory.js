(function() {
  'use strict';

  angular
    .module('app.pokedex')
    .factory('pokedexFactory', pokedexFactory);

  pokedexFactory.$inject = ['$http'];

  function pokedexFactory($http) {
    var exports = {
      getPokedex: getPokedex
    };

    return exports;

    function getPokedex(region) {
      region = region ? region : 'kanto';

      var config = {
        cache: true
      };

      return $http.get('https://pokeapi.co/api/v2/pokedex/' + region + '/', config);
    }
  }
})();
