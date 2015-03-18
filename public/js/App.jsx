/** @jsx React.DOM */
var React = require('react');
var Main = require('./components/Main.jsx');
var ShelterStore = require('./stores/ShelterStore.jsx');
var ShowList = require('./components/ShowList.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Main />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('content'));
