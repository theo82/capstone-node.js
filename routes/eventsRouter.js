                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Events = require('../models/events')

                    var eventsRouter = express.Router();
                    
                    eventsRouter.use(bodyParser.json());
                    
                    eventsRouter.route('/')
                    .get(function(req,res,next){
                        
                        Events.find(req.query)
                            
                            .exec(function (err, events) {
                                if (err) next(err);
                                res.json(events);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Events.create(req.body,function(err,events){
                          if(err) throw err;

                          console.log('event created')
                          var id = events._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the event info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Events.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   eventsRouter.route('/:eventsId')
                      .get(function (req, res, next) {
                        req.params.eventsId = mongoose.Types.ObjectId(req.params.eventsId);
                        Events.findById(req.params.eventsId, function (err, events) {
                          if (err) next(err);
                          console.log(req.params.eventsId);
                          res.json(events);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Events.findByIdAndUpdate(req.params.eventsId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, events) {
                                if (err) next(err);
                                res.json(events);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Events.findByIdAndRemove(req.params.eventsId, function (err, resp) {
                                if (err) throw err;
                                res.json(resp);
                        });
                    });

                    

                    module.exports = eventsRouter;


/* 
-


*/
