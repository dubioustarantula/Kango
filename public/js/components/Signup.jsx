var React = require('react');

var Signup = React.createClass({
  render: function() {
    return (
      <div className="modal-popup modal-content">
        <h2 className="modal-popup-header">Sign Up for Kango</h2>
        <form action="/signup" method="post">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" />
          </div>

          <button type="submit" class="btn btn-warning btn-lg">Signup</button>
        </form>

        // <p>Need an account? <a href="/signup">Signup</a></p>
      </div>
    )
  }
});

module.exports = Signup;