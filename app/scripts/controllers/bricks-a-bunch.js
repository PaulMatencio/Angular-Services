'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse',function(warehouse) {
      this.name = 'Bricks A Brunch';
      var vm = this; // view model
      /*
      warehouse.getBricks().then( function(data) {
        vm.redBricks    = data.bricks.red;
        vm.yellowBricks = data.bricks.yellow;
      }, function(reason){
        console.log(reason);
      });
      */

      vm.redBricks    = warehouse.brick1.red;
      vm.yellowBricks = warehouse.brick1.yellow;

      this.addToCart = function(item) {
        if ( item.quantity > 0 ) {
          item.quantity -= 1;
        }
      };

      this.removeFromCart = function(item) {
          item.quantity += 1;
      };
  }]);
