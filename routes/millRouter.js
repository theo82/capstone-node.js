                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Mill = require('../models/mill')

                    var millRouter = express.Router();
                    
                    millRouter.use(bodyParser.json());
                    
                    millRouter.route('/')
                    .get(function(req,res,next){
                        
                        Mill.find(req.query)
                            
                            .exec(function (err, mill) {
                                if (err) next(err);
                                res.json(mill);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Mill.create(req.body,function(err,mill){
                          if (err) next(err);

                          console.log('Mill created')
                          var id = mill._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the mill info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mill.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   millRouter.route('/:millId')
                      .get(function (req, res, next) {
                        req.params.millId = mongoose.Types.ObjectId(req.params.millId);
                        Mill.findById(req.params.millId, function (err, mill) {
                          if (err) next(err);
                          console.log(req.params.millId);
                          res.json(mill);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mill.findByIdAndUpdate(req.params.millId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, mill) {
                                if (err) next(err);
                                res.json(mill);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Mill.findByIdAndRemove(req.params.millId, function (err, resp) {
                                if (err) throw err;
                                res.json(resp);
                        });
                    });

                    

                    module.exports = millRouter;


/* 
-


*/
