var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var ShelterCard = require('./ShelterCard.jsx');

var ShowList = React.createClass({
	render: function() {
		return (
			<div>
				<h3 className="section-header">Meet the Animal Shelters</h3>
				<p className="section-short">San Francisco • Oakland • South Bay</p>
				<ul className="shelter-list-home">
					<div className="row">
						{this.props.shelters.map(function(shelter, i){
								return <ShelterCard key={i} data={shelter} />
							}, this)
						}
					</div>
				</ul>
			</div>
		)
	}
});

module.exports = ShowList;
