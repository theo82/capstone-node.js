var express = require('express');
var imageRouter = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage }).single('myImage');



imageRouter.post('/', (req, res) => {
    upload(req, res, err => {
        if (err) {
            // An error occurred when uploading
            return res.sendStatus(500)
        }

        // Everything went fine
        return res.json({
            success: true,
            message: 'Image uploaded!'
        });
    })
});



module.exports = imageRouter;