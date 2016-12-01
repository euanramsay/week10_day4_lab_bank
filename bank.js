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
  }
}

module.exports = Bank;