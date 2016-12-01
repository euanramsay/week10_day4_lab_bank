var assert = require('assert');
var Bank = require('../bank');

var bank;

describe('Bank', function() {

  before(function() {
    bank = new Bank('Barclays');
  });

  it("should have a name", function() {
    assert.equal('Barclays', bank.name);
  });

  it("should start with zero accounts", function() {
    assert.equal(0, bank.accountCount());
  })

});