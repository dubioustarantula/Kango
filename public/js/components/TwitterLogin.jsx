var React = require('react');

var TwitterLogin = React.createClass({
  render: function() {
    return (
      <div className="modal-popup modal-content">
              <h2 className="modal-popup-header">Login with Twitter</h2>
              <form action="/auth/twitter" method="get">
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

            </div>
    )
  }
});

module.exports = TwitterLogin;