'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ['brickWarehouse',function (warehouse) {

    this.name = 'Lots O Bricks';
    var vm = this;
    /*
    warehouse.getBricks().then( function(data) {
      vm.redBricks = data.bricks.red;
      vm.blueBricks = data.bricks.blue;
      vm.greenBricks = data.bricks.green;
    }, function(reason){
      console.log(reason);
    });
    */
    vm.redBricks = warehouse.brick1.red;
    vm.blueBricks = warehouse.brick1.blue;
    vm.greenBricks = warehouse.brick1.green;

    this.addToCart = function(item) {
      if ( item.quantity > 0 ) {
        item.quantity -= 1;
      }
    };

    this.removeFromCart = function(item) {
        console.log(item);
        item.quantity += 1;
    };

  }]);
