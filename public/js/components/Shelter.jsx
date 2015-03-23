var React = require('react');
var Reflux = require('reflux');
var _ = require('underscore');
var $ = require('jquery');
var ShelterStore = require('../stores/ShelterStore.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');
var AsyncActions = require('../actions/asyncActions.jsx');

var Shelter = React.createClass({
   getInitialState: function() {
    return null
  },
  updateState: function() {
    console.log('great success');
  },
  submit: function() {
    var amount = $('#donation').val();
    AsyncActions.donation.triggerAsync(amount); 
  },
	render: function() {
		var url = window.location.href.split('/');
		var shelterPath = url[url.length-1];
    var shelter = (_.filter(this.props.shelters, function(element) {
    	if(element.sheltername === shelterPath) {
    		return element;
    	}
    })[0]);
		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">
					<h1>{shelter.name}</h1>
          <form action="/donate" method="post" onSuccess={this.updateState} onSubmit={this.submit}>
            <input id="donation" type="text" name="donation" />
            <input type="text" name="sheltername" className="hidden" readOnly="true" value={shelter.sheltername} />
            <button type="submit">Submit</button>
          </form>
				</div>
			</div>
		);
	}
});

module.exports = Shelter;