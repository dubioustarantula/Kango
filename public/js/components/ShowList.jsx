var React = require('react');

var ShowList = React.createClass({
	render: function() {
		console.log('this.props',this.props);
		var listShelters = this.props.shelters.map(function(shelter){
			return (
				<li className="col-md-4"> 
					<div className="shelter-card">
						<img src={"http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg"} />
						<div className="shelter-info">
							{shelter.name}
						</div>
					</div>
				</li>
			)
		});
		return (
			<div>
				<h3 className="section-header">Meet the Animal Shelters</h3>
				<p className="section-short">San Francisco • Oakland • South Bay</p>
				<ul className="shelter-list-home">
					<div className="row">
						{listShelters}
					</div>
				</ul>
			</div>
		)
	}
});

module.exports = ShowList;
