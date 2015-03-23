var React = require('react');

var ShowList = React.createClass({
	render: function() {
		console.log('this.props',this.props);
		var listShelters = this.props.shelters.map(function(shelter){
			return (
				<li className="col-md-4"> 
					<div className="shelter-card">
						<img src={shelter.image_url} />
						<div className="shelter-info">
							<div className="shelter-bio">
								<h3>{shelter.name}</h3>
							</div>
							<div className="shelter-progress-bar"></div>
							<div className="shelter-fund-wrapper">
								<span className="shelter-raised">
									$350 raised
								</span>
								<span className="shelter-target">
									$400 to go
								</span>
							</div>
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
