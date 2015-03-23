var Reflux = require('reflux');
var $ = require('jquery');

var Actions = Reflux.createActions({
    "donation": {children: ["completed","failed"]}
});

Actions.load.listen( function() {

  $.ajax({
   type: "GET",
   url: '/shelters',
   headers: {'x-access-token': "TOKEN GOES HERE"}
  }).done( this.completed )
  .fail( this.failed );

});


module.exports = AsyncActions;