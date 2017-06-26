var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var DeputyMayor = require('../models/deputyMayor');

                    var deputyMayorRouter = express.Router();
                    
                    deputyMayorRouter.use(bodyParser.json());
                    
                    deputyMayorRouter.route('/')
                    .get(function(req,res,next){
                        
                        DeputyMayor.find({})
                            
                            .exec(function (err, deputymayor) {
                                if (err) next(err);
                                res.json(deputymayor);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       DeputyMayor.create(req.body,function(err,deputymayor){
                          if (err) next(err);

                          console.log('Deputy Mayor created')
                          var id = deputymayor._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                          
                           
                           res.end('Added the deputy mayor info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            DeputyMayor.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   deputyMayorRouter.route('/:deputymayorId')
                      .get(function (req, res, next) {
                        req.params.deputymayorId = mongoose.Types.ObjectId(req.params.deputymayorId);
                        DeputyMayor.findById(req.params.deputymayorId, function (err, deputymayor) {
                          if (err) next(err);
                          console.log(req.params.mayorId);
                          res.json(deputymayor);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            DeputyMayor.findByIdAndUpdate(req.params.debutymayorId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, deputymayor) {
                                if (err) next(err);
                                res.json(deputymayor);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            DeputyMayor.findByIdAndRemove(req.params.deputymayorId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = deputyMayorRouter;