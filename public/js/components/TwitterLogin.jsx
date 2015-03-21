var React = require('react');

var TwitterLogin = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 col-sm-offset-3">

          <h1><span className="fa fa-user"></span> Add Local Account</h1>

          <form action="/connect/local" method="post">
              <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" />
              </div>

              <button type="submit" className="btn btn-warning btn-lg">Add Local</button>
          </form>

          <p><a href="/profile">Go back to profile</a></p>

      </div>
    )
  }
});

module.exports = TwitterLogin;