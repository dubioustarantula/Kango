var React = require('react');
var Reflux = require('reflux');
var _ = require('underscore');
var $ = require('jquery');
var ShelterStore = require('../stores/ShelterStore.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');

var Shelter = React.createClass({
	render: function() {
		var url = window.location.href.split('/');
		var shelterPath = url[url.length-1];
    var shelter = _.filter(this.props.shelters, function(element) {
    	if(element.sheltername === shelterPath) {
    		return element;
    	}
    })[0];
		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">
					<h1>{shelter.name}</h1>
				</div>
			</div>
		);
	}
});

module.exports = Shelter;