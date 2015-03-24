var React = require('react');
var Reflux = require('reflux');
var _ = require('underscore');
var $ = require('jquery');
var ShelterStore = require('../stores/ShelterStore.jsx');
var NavBarDefault = require('./NavBarDefault.jsx');
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
		var url = window.location.href.split('/');
		var shelterPath = url[url.length-1];
    var shelter = this.findMe(this.props.shelters, shelterPath);
		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">
					<h1>{shelter.name}{this.current.raised}</h1>
          <form action="/donate" method="post" onSubmit={this.submit}>
            <input id="donation" type="text" name="donation" />
            <input type="text" name="sheltername" className="hidden" readOnly="true" value={this.current.sheltername} />
            <button type="submit">Submit</button>
          </form>
				</div>
			</div>
		);
	}
});

module.exports = Shelter;