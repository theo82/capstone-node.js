                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Church = require('../models/church')

                    var churchRouter = express.Router();
                    
                    churchRouter.use(bodyParser.json());
                    
                    churchRouter.route('/')
                    .get(function(req,res,next){
                        
                        Church.find(req.query)
                            
                            .exec(function (err, church) {
                                if (err) next(err);
                                res.json(church);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       Church.create(req.body,function(err,church){
                          if(err) throw err;

                          console.log('church created')
                          var id = church._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the church info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                        Church.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });
                   
                   churchRouter.route('/:churchId')
                      .get(function (req, res, next) {
                        req.params.churchId = mongoose.Types.ObjectId(req.params.churchId);
                        Church.findById(req.params.churchId, function (err, church) {
                          if (err) next(err);
                          console.log(req.params.churchId);
                          res.json(church);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Church.findByIdAndUpdate(req.params.churchId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, church) {
                                if (err) next(err);
                                res.json(church);
                        });
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Church.findByIdAndRemove(req.params.churchId, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = churchRouter;


/* 
-


*/
