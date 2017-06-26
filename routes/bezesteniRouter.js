                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Bezesteni = require('../models/bezesteni')

                    var bezesteniRouter = express.Router();
                    
                    bezesteniRouter.use(bodyParser.json());
                    
                    bezesteniRouter.route('/')
                    .get(function(req,res,next){
                        
                        Bezesteni.find(req.query)
                            
                            .exec(function (err, bezesteni) {
                                if (err) return next(err);
                                res.json(bezesteni);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
                       Bezesteni.create(req.body,function(err,bezesteni){
                          if(err) throw err;

                          console.log('Bezesteni created')
                          var id = bezesteni._id;
                         
                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the bezesteni info with id: ' + id);
                       })   
                           
                           
                           
                          
                    })
                    
                    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function (req, res, next) {
                            Bezesteni.remove(req.query, function (err, resp) {
                                if (err) return next(err);
                                res.json(resp);
                            });
                    });
                   
                   bezesteniRouter.route('/:bezesteniId')
                      .get(function (req, res, next) {
                        req.params.bezesteniId = mongoose.Types.ObjectId(req.params.bezesteniId);
                        Bezesteni.findById(req.params.bezesteniId, function (err, bezesteni) {
                          if (err) return next(err);
                          console.log(req.params.bezesteniId);
                          res.json(bezesteni);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function (req, res, next) {
                            Bezesteni.findByIdAndUpdate(req.params.bezesteni, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, bezesteniId) {
                                if (err) return next(err);
                                res.json(bezesteniId);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function (req, res, next) {
                            Bezesteni.findByIdAndRemove(req.params.bezesteni, function (err, resp) {
                                if (err) return next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = bezesteniRouter;






