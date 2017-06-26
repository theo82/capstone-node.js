                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var SecondTheatre = require('../models/secondTheatre');

                    var SecondTheatreRouter = express.Router();
                    
                    SecondTheatreRouter.use(bodyParser.json());
                    
                    SecondTheatreRouter.route('/')
                    .get(function(req,res,next){
                        
                       SecondTheatre.find(req.query)
                            
                            .exec(function (err, secondtheatre) {
                                if (err) next(err);
                                res.json(secondtheatre);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       SecondTheatre.create(req.body,function(err,secondtheatre){
                          if (err) next(err);

                          console.log('First theatre created')
                          var id = secondtheatre._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                          
                           
                           res.end('Added the Second theatre info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            SecondTheatre.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   SecondTheatreRouter.route('/:secondtheatreId')
                      .get(function (req, res, next) {
                        req.params.firsttheatreId = mongoose.Types.ObjectId(req.params.secondtheatreId);
                        SecondTheatre.findById(req.params.secondtheatreId, function (err, secondtheatre) {
                          if (err) next(err);
                          console.log(req.params.secondtheatreId);
                          res.json(secondtheatre);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            SecondTheatre.findByIdAndUpdate(req.params.secondtheatreId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, secondtheatre) {
                                if (err) next(err);
                                res.json(secondtheatre);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            FirstTheatre.findByIdAndRemove(req.params.firsttheatreId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = SecondTheatreRouter;