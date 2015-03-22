var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var Login = React.createClass({
  render: function() {
    return (
      <div className="modal-popup modal-content">
        <h2 className="modal-popup-header">Sign In to Kango</h2>
        <form action="/login" method="post">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" />
          </div>

          <button type="submit" class="btn btn-warning btn-lg">Login</button>
        </form>

        <p>Need an account? <Link to="signup">Sign Up</Link></p>
      </div>
    )
  }
});

module.exports = Login;