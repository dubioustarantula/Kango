var Reflux = require('reflux');
var $ = require('jquery');

var AsyncActions = Reflux.createActions({
    "donation": {children: ["completed","failed"]}
});

AsyncActions.donation.listen( function(data) {
  console.log(data);

  // $.ajax({
  //  type: "POST",
  //  url: '/donate',
  //  data:  data
  // }).done( this.completed )
  // .fail( this.failed );

});


module.exports = AsyncActions;