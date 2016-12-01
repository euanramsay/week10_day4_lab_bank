var Bank = function(name) {
  this.name = name;
  this.accounts = [];
};

Bank.prototype = {
  accountCount: function() {
    return this.accounts.length;
  },
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findAccountByName: function(name) {
    var foundAccount = this.accounts.find(function(account) {
      return account.name === name;
    });
    return foundAccount;
  },
  findLargestAccount: function() {
    this.accounts.sort(function(accountA, accountB){
      return accountA.amount - accountB.amount;
    });
    return this.accounts[this.accounts.length - 1];
  }
};

module.exports = Bank;