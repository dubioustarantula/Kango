var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Route.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var Modal = require('react-bootstrap/lib/Modal');
var ModalTrigger = require('react-bootstrap/lib/ModalTrigger');

var NavBarDefault = React.createClass({
	render: function() {
		return (
			<div>
			<header>
				<nav className="navbar navbar-default container">
					<div className="wrapper">
						<div className="navbar-header">
							<Link to="main" className="navbar-brand">
							  kango`
							</Link>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="fund-shelters">View Shelters</Link></li>
							<li><Link to="main">About</Link></li>
							<li>
							<Link to="main" data-toggle="modal" data-target="#signIn">
									Sign In
							</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div className="modal fade" id="signIn" tabindex="-1" 	role="dialog">
			  <div className="modal-dialog">
					<div className="modal-popup modal-content">
					  <h2 className="modal-popup-header">Sign In</h2>
					</div>
			  </div>
			</div>
			</div>
		)
	}
});

var SignInModal = React.createClass({
	render: function() {
		return (
			<Modal title="Sign In" animation={true}>
				<div className="modal-body">
					<h4>Hi there</h4>
				</div>
			</Modal>
		);
	}
});

module.exports = NavBarDefault;