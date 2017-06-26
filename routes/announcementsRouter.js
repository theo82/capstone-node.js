                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Announcements = require('../models/announcements')

                    var announcementsRouter = express.Router();
                    
                    announcementsRouter.use(bodyParser.json());
                    
                    announcementsRouter.route('/')
                    .get(function(req,res,next){
                        
                        Announcements.find(req.query)
                            
                            .exec(function (err, announcements) {
                                if (err) next(err);
                                res.json(announcements);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Announcements.create(req.body,function(err,announcements){
                          if(err) throw err;

                          console.log('announcement created')
                          var id = announcements._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the announcements info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                        Announcements.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });
                   
                   announcementsRouter.route('/:announcementsId')
                      .get(function (req, res, next) {
                        req.params.announcementsId = mongoose.Types.ObjectId(req.params.announcementsId);
                        Announcements.findById(req.params.announcementsId, function (err, announcements) {
                          if (err) next(err);
                          console.log(req.params.announcementsId);
                          res.json(announcements);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Announcements.findByIdAndUpdate(req.params.announcementsId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, announcements) {
                                if (err) next(err);
                                res.json(announcements);
                        });
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Announcements.findByIdAndRemove(req.params.announcementsId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = announcementsRouter;


/* 
-


*/
