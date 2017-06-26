var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    
                    var Mayor = require('../models/mayor')
                    var Verify = require('./verify');
                    var mayorRouter = express.Router();
                    
                    mayorRouter.use(bodyParser.json());
                    
                    mayorRouter.route('/')
                    .get(function(req,res,next){
                        
                        Mayor.find(req.query)
                            
                            .exec(function (err, mayor) {
                                if (err) next(err);
                                res.json(mayor);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Mayor.create(req.body,function(err,mayor){
                          if (err) next(err);

                          console.log('Mayor created')
                          var id = mayor._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           res.end('Added the mayor info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mayor.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   mayorRouter.route('/:mayorId')
                      .get(function (req, res, next) {
                        req.params.mayorId = mongoose.Types.ObjectId(req.params.mayorId);
                        Mayor.findById(req.params.mayorId, function (err, mayor) {
                          if (err) next(err);
                          console.log(req.params.mayorId);
                          res.json(mayor);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mayor.findByIdAndUpdate(req.params.mayorId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, mayor) {
                                if (err) throw err;
                                res.json(mayor);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mayor.findByIdAndRemove(req.params.mayorId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = mayorRouter;