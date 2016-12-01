var assert = require('assert');
var Bank = require('../bank');

var bank;
var accountStub;

describe('Bank', function() {

  before(function() {
    accountStub = {name: "Mr Johnson", amount: 5000, type: "personal"};
    bank = new Bank('Barclays');
  });

  it("should have a name", function() {
    assert.equal('Barclays', bank.name);
  });

  it("should start with zero accounts", function() {
    assert.equal(0, bank.accountCount());
  })

  it("should be able to add account", function() {
    bank.addAccount(accountStub);
    assert.equal(1, bank.accountCount());
  })

});