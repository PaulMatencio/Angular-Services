'use strict';

describe('Service: brickWareHouse', function () {

  // load the service's module
  beforeEach(module('serviceQuizApp'));

  // instantiate service
  var brickWareHouse;
  beforeEach(inject(function (_brickWareHouse_) {
    brickWareHouse = _brickWareHouse_;
  }));

  it('should do something', function () {
    expect(!!brickWareHouse).toBe(true);
  });

});
