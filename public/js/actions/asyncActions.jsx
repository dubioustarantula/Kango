var Reflux = require('reflux');
var $ = require('jquery');

var AsyncActions = Reflux.createActions({
    "donation": {children: ["completed","failed"]}
});

AsyncActions.donation.listen( function(data) {
  $.ajax({
   type: "GET",
   url: '/shelters?' + data.sheltername
  }).done( this.completed )
  .fail( this.failed );
});

module.exports = AsyncActions;