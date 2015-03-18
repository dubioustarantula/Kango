var React = require('react');

var ShowList = React.createClass({
	render: function() {
		var listShelters = this.props.shelters.map(function(shelter){
			return <li> {shelter.name} </li>
		});
		return (
			<div>
				<h3> Shelters </h3>
				<ul>
					{listShelters}
				</ul>
			</div>
		)
	}
});

module.exports = ShowList;
