/** @jsx React.DOM */
// var NavBar = require('./compnents/NavBar.jsx');

var Main = React.createClass({
	render: function() {
		return (
			<div className="App">
				<h1>Kango</h1>
			</div>
		);
	}
});	

React.renderComponent(<Main />, document.getElementById('content'));