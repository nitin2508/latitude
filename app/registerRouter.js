var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userRegistration = require('./models/userRegistration');
var registerRouter= express.Router();
registerRouter.use(bodyParser.json());
registerRouter.route('/')
    .post(function(req, res, next) {
            userRegistration.create(req.body, function(err,user) {
                    if (err) {throw err;}
                    var id = user._id;
                    // res.writeHead(200, {
                    //     'Content-Type': 'json'
                    // });
                    res.json(user);
                });
            })

        .get(function(req, res, next) {
            userRegistration.find({}, function(err,user) {
                if (err) {throw err;}
                res.json(user);
            });
        });
module.exports = registerRouter;
