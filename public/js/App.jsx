/** @jsx React.DOM */
var React = require('react');
var request = require('superagent');
var ShelterStore = require('./stores/ShelterStore.jsx')

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
		console.log(this)
		return (
			<div className="App">
				<h1>Kango</h1>
				<ShowList shelters={this.state.nearbyShelters} />
			</div>
		)
	}
});	

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

var ShowList = React.createClass({
	render: function() {
		var listShelters = this.props.shelters.map(function(shelter){
			return <li> {shelter} </li>
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

React.renderComponent(<Main shelter="Berkeley" />, document.getElementById('content'));
module.exports = Main;