var React = require('react');
var Reflux = require('reflux');
var _ = require('underscore');
var $ = require('jquery');
var ShelterStore = require('../stores/ShelterStore.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');
var circleProgress = require('../vendor/circle-progress.js');
var AsyncActions = require('../actions/asyncActions.jsx');


var Shelter = React.createClass({
   getInitialState: function() {
    return null
  },
  componentDidMount: function() {
  	$('#shelter--progress-circle').circleProgress({
  		value: 0.8,
  		size: 80
  	});
  },
  updateState: function() {
    console.log('great success');
  },
  submit: function() {
    var amount = $('#donation').val();
    AsyncActions.donation.triggerAsync(amount); 
  },
	render: function() {
		/* Gets the shelterName and filters the contents */
		var url = window.location.href.split('/');
		var shelterPath = url[url.length-1];
    var shelter = _.filter(this.props.shelters, function(element) {
    	if(element.sheltername === shelterPath) {
    		return element;
    	}
    })[0];
    var paragraph = shelter.bio.split('\n');
    console.log(paragraph);
    var fullParagraph = [];
    
    for (var i = 0; i < paragraph.length; i++) {
    	fullParagraph.push(paragraph[i]);
    }
    console.log('fullPs', fullParagraph);


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
							<div id="#shelter--progress-circle"></div>
							{shelter.raised}
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
						<form action="/donate" method="post" onSuccess={this.updateState} onSubmit={this.submit}>
						  <input id="donation" type="text" name="donation" />
						  <input type="text" name="sheltername" className="hidden" readOnly="true" value={shelter.sheltername} />
						  <button id="donation-submit" type="submit">DONATE</button>
						</form>
						</div>
					</div>

				</div>
			</div>
		);
	}
});

module.exports = Shelter;