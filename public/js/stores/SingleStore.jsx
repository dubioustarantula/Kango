var Reflux = require('reflux');
var AsyncActions = require('../actions/asyncActions.jsx');

var SingleStore = Reflux.createStore({
	init: function() {
		this.listenTo(AsyncActions.donation.completed, this.load);
    this.listenTo(AsyncActions.donation.failed, this.error);
	},
	load: function(data) {
    this.trigger(data);
  },
  error: function(err) {
    console.log('donation post error', err);
  }
});

module.exports = SingleStore;
