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


        this.redBricks = warehouse.bricks.red;
        this.blueBricks = warehouse.bricks.blue;
        this.greenBricks = warehouse.bricks.green;

    warehouse.getBricks().then( function(data) {
      vm.readBricks = data.bricks.red;
      vm.blueBricks = data.bricks.blue;
      vm.greeBricks = data.bricks.green;
      console.log(vm);
    }, function(reason){
      console.log(reason);
    });

    this.addToCart = function(item) {
      if ( item.quantity > 0 ) {
        item.quantity -=1;
      }
    };

    this.removeFromCart = function(item) {
        item.quantity +=1;

    };

  }]);
