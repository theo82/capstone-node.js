var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var FirstTheatre = require('../models/firstTheatre');

                    var FirstTheatreRouter = express.Router();
                    
                    FirstTheatreRouter.use(bodyParser.json());
                    
                    FirstTheatreRouter.route('/')
                    .get(function(req,res,next){
                        
                        FirstTheatre.find({})
                            
                            .exec(function (err, firsttheatre) {
                                if (err) next(err);
                                res.json(firsttheatre);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       FirstTheatre.create(req.body,function(err,firsttheatre){
                          if(err) throw err;

                          console.log('First theatre created')
                          var id = firsttheatre._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                          
                           
                           res.end('Added the First theatre info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            FirstTheatre.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   FirstTheatreRouter.route('/:firsttheatreId')
                      .get(function (req, res, next) {
                        req.params.firsttheatreId = mongoose.Types.ObjectId(req.params.firsttheatreId);
                        FirstTheatre.findById(req.params.firsttheatreId, function (err, firsttheatre) {
                          if (err) next(err);
                          console.log(req.params.firsttheatreId);
                          res.json(firsttheatre);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            FirstTheatre.findByIdAndUpdate(req.params.firsttheatreId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, firsttheatre) {
                                if (err) next(err);
                                res.json(firsttheatre);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            FirstTheatre.findByIdAndRemove(req.params.firsttheatreId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = FirstTheatreRouter;