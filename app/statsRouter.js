var express = require('express');
var bodyParser = require('body-parser');
var verify = require('./verify');
var mongoose = require('mongoose');
var userRegistration = require('./models/userRegistration');
var statsRouter = express.Router();
statsRouter.use(bodyParser.json());
statsRouter.route('/')

    .get(verify.verifyOrdinaryUser,function(req, res, next) {
        userRegistration.aggregate([{
            $group: {
                _id: '$registrationType', //$region is the column name in collection
                count: {
                    $sum: 1
                }
            }
        }], function(err, result) {
            if (err) {
                next(err);
            } else {
                res.json(result);
            }
        });
    });
module.exports = statsRouter;
