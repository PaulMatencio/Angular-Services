'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWareHouse
 * @description
 * # brickWareHouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
  .service('brickWarehouse', function()  {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getBricks = function() {
        return $.get("/bricks/brickwarehouse.json");
    };

    this.bricks = {
     'red' : {
       '1x1': {
         quantity: 29,
         price: 0.01
       },
      '2x2': {
        quantity: 48,
        price: 0.03
      },
      '2x6': {
        quantity: 27,
        price: 0.05
      }
    },

    'blue' : {
      '2x2': {
        'quantity': 7,
        'price': 0.02
      },
      '2x4': {
        'quantity': 2,
        'price': 0.04
      }
    },

    'green' : {
      '2x4': {
        quantity: 13,
        price: 0.04
      },
      '2x8': {
        quantity: 41,
        price : 0.08
      }
    }

};
console.log(this);
});
