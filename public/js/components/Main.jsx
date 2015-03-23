var React = require('react');
var ShelterStore = require('../stores/ShelterStore.jsx');
var ShowList = require('./ShowList.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var Main = React.createClass({
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
								<Link to="fund-shelters" className="btn hero-btn view">
									<span>View Shelters</span>
								</Link>
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
						<ShowList {...this.props} />
					</div>
				</section>
			</div>
		)
	}
});	

module.exports = Main;