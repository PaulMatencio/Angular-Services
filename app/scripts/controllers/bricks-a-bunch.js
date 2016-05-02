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

      this.redBricks = warehouse.bricks.red;

      warehouse.getBricks().then( function(data) {
        vm.readBricks = data.bricks.red;
        console.log(vm);
      }, function(reason){
        console.log(reason);
      });

      this.redBricks = warehouse.bricks.red;

      this.addToCart = function(item) {
        if ( item.quantity > 0 ) {
          item.quantity -=1;
        }
      };

      this.removeFromCart = function(item) {
          item.quantity +=1;

      };
  }]);
