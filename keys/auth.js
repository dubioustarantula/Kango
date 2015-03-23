var nconf = require('nconf');
 
nconf.file('settings.json');
nconf.env();

var consumerKey = nconf.get('consumerKey');
var consumerSecret = nconf.get('consumerSecret');

module.exports = {

    'twitterAuth' : {
        'consumerKey'       : consumerKey,
        'consumerSecret'    : consumerSecret,
<<<<<<< Updated upstream
        'callbackURL'       : 'http://www.kango.azurewebsites.net/auth/twitter'
=======
        'callbackURL'       : 'http://kango.azurewebsites.net/auth/twitter/callback'
>>>>>>> Stashed changes
    }
};