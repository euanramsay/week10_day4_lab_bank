var assert = require('assert');
var Account = require('../account');

var account;

describe('Account', function() {

  before(function() {
    account = new Account("Mr Johnson", 5000.00, 'personal');
  })

  it('test should have name', function() {
    assert.equal('Mr Johnson', account.name);
  });

  it('test should have amount', function() {
    assert.equal(5000.00, account.amount);
  });

  it('test should have type', function() {
    assert.equal('personal', account.type);
  });

});