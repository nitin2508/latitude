var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var imageUploadRouter = express.Router();
//imageUploadRouter.use(bodyParser.json());

//imageUploadRouter.use(express.bodyParser({uploadDir:'/home/nitin'}));
imageUploadRouter.route('/')
    .post(upload.single('file'), function(req, res, next) {
        res.json(req.file);
    });
imageUploadRouter.route('/:path')
    .get(function(req, res, next) {
        res.setHeader('Content-disposition', 'attachment; filename=nitin.jpg');
        res.setHeader('Content-type', 'image/png');
        res.sendfile('./uploads/' + req.params.path);
    });

module.exports = imageUploadRouter;
