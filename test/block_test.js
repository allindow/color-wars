const chai = require('chai');
const assert = chai.assert;

const Block = require('../lib/block.js');

describe('Block', function(){
  context('with default attributes', function(){
    var block = new Block({});

    it('should have an x value', function(){
      assert.equal(block.x, 0);
    });

    it('should have a y value', function(){
      assert.equal(block.y, 0);
    });

    it('should have a width value', function(){
      assert.equal(block.width, 10);
    });

    it('should have a height value', function(){
      assert.equal(block.height, 10);
    });

    it('should have a default shape value of false', function(){
      assert.equal(block.color, "grey");
    });

    it('should have a default null child', function(){
      assert.equal(block.child, null);
    });

    it('should have a default null parent', function(){
      assert.equal(block.parent, null);
    });
  });

  context('with given attributes', function(){
    var block = new Block({x: 10, y: 10, width: 40, height: 40, color: "blue"});

    it('should have an x value', function(){
      assert.equal(block.x, 10);
      assert.equal(block.y, 10);
      assert.equal(block.width, 40);
      assert.equal(block.height, 40);
      assert.equal(block.color, "blue");
    });
  });

  context('with some attributes given', function(){
    var block = new Block({x: 10, y: 10, width: 40});

    it('should have an x value', function(){
      assert.equal(block.x, 10);
      assert.equal(block.y, 10);
      assert.equal(block.width, 40);
      assert.equal(block.height, 10);
      assert.equal(block.color, "grey");
    });
  });

  context('can change a blocks color', function(){
    var block = new Block();

    it('should have default grey', function(){
      assert.equal(block.color, "grey");
    });

    it('should be blue if color is changed', function(){
      block.color = "blue";
      assert.equal(block.color, "blue");
    });
  });

  context('knows its coordinates', function(){
    var block = new Block({x: 10, y: 10, width: 1, height: 1});
    var coordinates = block.coordinates();

    it('should return a single coordinates', function(){
      assert.equal(coordinates.length, 4);
    });

    it('should return correct coordinates', function(){
      assert.deepEqual(coordinates, [{x: 10, y: 10}, {x: 10, y: 11}, {x: 11, y: 10}, {x: 11, y: 11}]);
    });
  });

  context('knows if it contains coordinate', function(){
    var block = new Block({x: 10, y: 10, width: 1, height: 1});

    it('should return true if it contains given coordinate', function(){
      var coord = {x: 10, y: 10};
      var contains = block.contains(coord);
      assert.equal(contains, true);
    });

    it('should return false if not contained', function(){
      var coord = {x: 101, y: 113};
      var contains = block.contains(coord);
      assert.equal(contains, false);
    });
  });

  context("can change the color of its neighbor block", function(){
    it("to its own color", function(){
      var currentBlock = new Block({x: 10, y: 10, color: "green"});
      var neighbor     = new Block({x: 10, y: 20, color: "blue"});
      currentBlock.changeNeighborColor(neighbor);
      assert.equal(neighbor.color, currentBlock.color);
    });
  });


});
