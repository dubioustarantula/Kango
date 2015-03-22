var React = require('react');

var TwitterLogin = React.createClass({
  render: function() {
    return (
      <div className="modal-popup modal-content">
        <h2 className="modal-popup-header">Login with Twitter</h2>
        <form action="/auth/twitter" method="get">
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
});

module.exports = TwitterLogin;