var React = require('react');

var NotFound = React.createClass({
	render: function() {
		return (
			<div className="container">
				<h1>Page not found.</h1>
			</div>
		)
	}
});

module.exports = NotFound;