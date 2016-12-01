var assert = require('assert');
var Bank = require('../bank');

var bank;
var accountStub1;
var accountStub2;
var accountStub3;

describe('Bank', function() {

  before(function() {
    accountStub1 = {name: "Mr Johnson", amount: 5000, type: "personal"};
    accountStub2 = {name: "Mr Max", amount: 2000, type: "personal"};
    accountStub3 = {name: "Mr Euan", amount: 10000, type: "business"};
    bank = new Bank('Barclays');
  });

  it("should have a name", function() {
    assert.equal('Barclays', bank.name);
  });

  it("should start with zero accounts", function() {
    assert.equal(0, bank.accountCount());
  })

  it("should be able to add account", function() {
    bank.addAccount(accountStub1);
    assert.equal(1, bank.accountCount());
  })

  it("should be able to find account by name", function() {
    bank.addAccount(accountStub1);
    bank.addAccount(accountStub2);
    bank.addAccount(accountStub3);
    var foundAccount = bank.findAccountByName("Mr Max");
    assert.equal(accountStub2, foundAccount);
  })

});



















