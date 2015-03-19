var React = require('react');
var ShelterStore = require('../stores/ShelterStore.jsx');
var ShowList = require('./ShowList.jsx');
var Main = React.createClass({
	getInitialState: function() {
		return {
			nearbyShelters: ShelterStore.getShelters()
		}
	},
	addShelter: function(shelter) {
		this.setState({
			shelters: this.state.nearbyShelters.concat([shelter])
		})
	},
	render: function() {
		return (
			<div className="App container">
				<ShowList shelters={this.state.nearbyShelters} />
			</div>
		)
	}
});	

module.exports = Main;