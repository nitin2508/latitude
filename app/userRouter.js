var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserRegistration = require('./models/user');
var passport = require('passport');
var userRouter = express.Router();
userRouter.use(bodyParser.json());
var verify = require('./verify');

userRouter.post('/register', function(req, res) {
    UserRegistration.register(new UserRegistration({
        username: req.body.username
    }), req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({
                err: err
            });
        }
        passport.authenticate('local')(req, res, function() {
            return res.status(200).json({
                status: 'Registration Sucessful'
            });
        });
    });
});
userRouter.post('/login', function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'could not login in user'
                });
            }
            var token = verify.getToken(user);
            var Userinformation = {
                token:token,
                username:user.username
            };
            console.log(Userinformation.username);
            res.cookie('auth', Userinformation);
            res.status(200).json({
                status: 'Login Sucessfull',
                success: true,
                token: token,
                user:user
            });
        });
    })(req, res, next);
});
userRouter.get('/logout', function(req, res, next) {
    req.logout();
    res.clearCookie('auth');
    res.status(200).json({
        status: 'Bye'
    });
});

module.exports = userRouter;
