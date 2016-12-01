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
    })
    return foundAccount;
  }
}

module.exports = Bank;