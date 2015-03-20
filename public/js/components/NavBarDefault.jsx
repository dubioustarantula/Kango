var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Route.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var NavBarDefault = React.createClass({
	render: function() {
		return (
			<header>
				<nav className="navbar navbar-default container">
					<div className="wrapper">
						<div className="navbar-header">
							<Link to="main" className="navbar-brand">
							  kango
							</Link>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="fund-shelters">View Shelters</Link></li>
							<li><Link to="main">About</Link></li>
							<li><Link to="main">Sign In</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
});

module.exports = NavBarDefault;