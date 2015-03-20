var React = require('react');
var ShelterStore = require('../stores/ShelterStore.jsx');
var ShowList = require('./ShowList.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');

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
			<div>
				<div className="container-fluid hero">
					<NavBarDefault />
					<div className="container">
						<div className="hero-description">
							<h1 className="hero-headline">Connecting donors to animal shelters in need</h1>
							<div className="button-group">
								<a className="btn hero-btn more" href="#">
									<span>Learn More</span>
								</a>
								<a className="btn hero-btn view" href="">
									<span>View Shelters</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<section className="devoted">
					<div className="container">
						<h2>100% of your donation fund Bay Area animal shelters.</h2>
					</div>
				</section>
				<section className="three-shelters">
					<div className="container">
						<ShowList shelters={this.state.nearbyShelters} />
					</div>
				</section>
			</div>
		)
	}
});	

module.exports = Main;