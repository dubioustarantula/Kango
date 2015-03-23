var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var $ = require('jquery');

var ShelterCard = React.createClass({

	render: function() {
		var progress = Math.floor((this.props.data.raised / this.props.data.goal) * 100) + '%';
		return (
			<li className="col-md-4"> 
				<div className="shelter-card">
						<Link to="shelter" params={{sheltername: this.props.data.sheltername}}> 							
							<img src={this.props.data.image_url} />
						</Link>
					<div className="shelter-info">
						<div className="shelter-bio">
							<h3>{this.props.data.name}</h3>
						</div>
						<div className="shelter-progress-bar"></div>
						<div className="shelter-fund-wrapper">
							<span className="shelter-raised">
								${this.props.data.raised} raised
							</span>
							<span className="shelter-target">
								${this.props.data.goal - this.props.data.raised} to go
							</span>
						</div>
					</div>
				</div>
			</li>
		)
	}
});

module.exports = ShelterCard;