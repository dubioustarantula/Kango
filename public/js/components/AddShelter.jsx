var React = require('react');

var AddShelter = React.createClass({
	getInitialState: function() {
		return {
			newShelter: ''
		}
	},
	updateNewShelter: function(e) {
		this.setState({
			newShelter: e.target.value
		});
	},
	handleAddNew: function(e) {
		this.props.addNew(this.state.newShelter);
		this.setState({
			newShelter: ''
		});
	},
	render: function() {
		return (
			<div>
				<input type="text" value="this.state.newShelter" onChange={this.updateNewFriend} />
				<button onClick={this.handleAddNew}> Add New Shelter </button>
			</div>
		);
	}
});

module.exports = AddShelter;
