/** @jsx React.DOM */
var React = require('react');
var Main = require('./components/Main.jsx');
var ShelterStore = require('./stores/ShelterStore.jsx');
var ShowList = require('./components/ShowList.jsx');
var Shelters = require('./components/Shelters.jsx');
var NotFound = require('./components/NotFound.jsx');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Route.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-default">
						<div className="container">
							<div className="navbar-header">
								<Link to="main" className="navbar-brand">
								  kango
								</Link>
							</div>
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="main">Home</Link></li>
								<li><Link to="fund-shelters">Shelters</Link></li>
								<li><button type="button" className="btn btn-default navbar-btn">Sign In</button></li>
							</ul>
						</div>
					</nav>
				</header>
				<RouteHandler/>
			</div>
		)	
	}
});

var routes = (
  <Route name="app" handler={App}>
  	<Route name="main" path="/" handler={Main} />
    <Route name="fund-shelters" handler={Shelters}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes,function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

