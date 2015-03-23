var controllers = require('../controllers/index');

// route middleware to make sure a user is logged in
var isLoggedIn = function(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        return next();
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
};

module.exports = function(app, passport) {

    //HOME PAGE
    app.get('/', controllers.index);

    // LOGIN
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // SIGN UP
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // PROFILE
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // LOG OUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // TWITTER ROUTES
    // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/',
            failureRedirect : '/'
        }));



    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) 

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    //UNLINK ACCOUNTS
    //used to unlink acounts.  For social accounts, just remove the token
    //For local account, remove email and password
    //User account will stay active in case they want to reconnect in the future

        //local
        app.get('/unlink/local', function(req, res) {
            var user = req.user;
            user.email = undefined;
            user.password = undefined;
            user.save(function() {
                res.redirect('/profile');
            });
        });

        //twitter
        app.get('/unlink/twitter', function(req, res) {
            var user = req.user;
            user.twitter_token = undefined;
            user.save(function() {
                res.redirect('/profile');
            });
        });

    //Shelter requests

    app.post('/shelter', controllers.postShelter);
    app.get('/shelters', controllers.getShelters);

    // insecure enpoint disabled
    // app.get('/users', controllers.getUsers);

    //Donation requests

    app.post('/donate', controllers.postDonation);
    app.get('/donations', controllers.getDonations);

};

