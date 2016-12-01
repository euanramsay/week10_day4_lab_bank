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
  },
  accountTotals: function() {
    var total = this.accounts.reduce(function(sum, account) {
      return sum + account.amount;
    }, 0);
    return total;
  },
  averageAmount: function() {
    var total = this.accountTotals();
    return total / this.accountCount();
  },
  accountTotalsByType: function(type) {
    var filteredAccounts = this.accounts.filter(function(account) {
      return account.type === type; 
    });
    var total = filteredAccounts.reduce(function(sum, account) {
      return sum + account.amount;
    }, 0);
    return total;
  }
};

module.exports = Bank;