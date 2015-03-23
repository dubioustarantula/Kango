var React = require('react');
var NavBarDefault = require('./NavBarDefault.jsx');

var Shelters = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">
					<h1> This is the Shelters view </h1>
				</div>
			</div>
		)
	}
});

module.exports = Shelters;