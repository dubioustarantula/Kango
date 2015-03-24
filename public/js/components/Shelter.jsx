var React = require('react');
var Reflux = require('reflux');
var _ = require('underscore');
var $ = require('jquery');
var ShelterStore = require('../stores/ShelterStore.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');
var circleProgress = require('../vendor/circle-progress.js');
var AsyncActions = require('../actions/asyncActions.jsx');
var SingleStore = require('../stores/SingleStore.jsx');


var Shelter = React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentDidMount: function() {
      this.listenTo(SingleStore, this.onStatusChange);
  },
  current: {},
  onStatusChange: function(status) {
    this.current = status;
    this.setState({
      current: status
    });
    this.render();
  },
  findMe: function(shelters, sheltername) {
    var shelter = _.filter(shelters, function(element) {
      if(element.sheltername === sheltername) {
        return element;
      }
    })[0];
    this.current = shelter;
    return shelter;
  },
  submit: function() {
    AsyncActions.donation.triggerAsync(this.current); 
  },
	render: function() {
		/* Gets the shelterName and filters the contents */
		var url = window.location.href.split('/');
		var shelterPath = url[url.length-1];
    var shelter = this.findMe(this.props.shelters, shelterPath);
    var paragraph = shelter.bio.split('\n');
    console.log(paragraph);
    var fullParagraph = [];
    
    for (var i = 0; i < paragraph.length; i++) {
    	fullParagraph.push(paragraph[i]);
    }

    var progress = Math.floor((shelter.raised / shelter.goal) * 100) + '%';


		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">

					<div className="row">
						<div className="col-md-12">
							<h1 className="shelter--name">{shelter.name} – {shelter.city}, <span className="caps">{shelter.state}</span></h1>
						</div>	
					</div>
					<div className="row">
						<div className="col-md-8">
							<img className="shelter--photo" src={shelter.image_url} />
						</div>
						<div className="col-md-4">
							<div className="shelter--raised-goal">{progress}</div>
							<div className="shelter-fund-wrap">
								<div className="shelter--raised">${shelter.raised} raised</div>
								<div className="shelter--goal">${shelter.goal} to go</div>
							</div>
							<form id="donation-form" action="/donate" method="post" onSuccess={this.updateState} onSubmit={this.submit}>
							  <input id="donation" type="text" name="donation" />
							  <input type="text" name="sheltername" className="hidden" readOnly="true" value={this.current.sheltername} />
							  <button id="donation-submit" type="submit">DONATE</button>
							</form>

						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<h3 className="shelter--story-title caps">{shelter.name + "'s"} Story</h3>
							<div className="shelter--story">
								{fullParagraph}
							</div>
						</div>
						<div className="col-md-4">	
							<div className="shelter--leaderboard"></div>	
						</div>
					</div>

				</div>
			</div>
		);
	}
});

module.exports = Shelter;