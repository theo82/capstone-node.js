                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Park = require('../models/park')

                    var parkRouter = express.Router();
                    
                    parkRouter.use(bodyParser.json());
                    
                    parkRouter.route('/')
                    .get(function(req,res,next){
                        
                        Park.find(req.query)
                            
                            .exec(function (err, park) {
                                if (err) next(err);
                                res.json(park);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Park.create(req.body,function(err,park){
                          if (err) next(err);

                          console.log('Park created')
                          var id = park._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the park info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Park.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   parkRouter.route('/:parkId')
                      .get(function(req, res, next) {
                        req.params.parkId = mongoose.Types.ObjectId(req.params.parkId);
                        Park.findById(req.params.parkId, function (err, park) {
                          if (err) next(err);
                          console.log(req.params.parkId);
                          res.json(park);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Park.findByIdAndUpdate(req.params.parkId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, park) {
                                if (err) next(err);
                                res.json(park);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Park.findByIdAndRemove(req.params.parkId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = parkRouter;


/* 
-


*/
