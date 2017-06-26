                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var City = require('../models/city')

                    var cityRouter = express.Router();
                    
                    cityRouter.use(bodyParser.json());
                    
                    cityRouter.route('/')
                    .get(function(req,res,next){
                        
                        City.find(req.query)
                            
                            .exec(function (err, city) {
                                if (err) next(err);
                                res.json(city);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       City.create(req.body,function(err,city){
                          if(err) throw err;

                          console.log('City created')
                          var id = city._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the city info with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            City.remove({}, function (err, resp) {
                                if (err) next(err);
                                res.json(resp);
                            });
                    });
                   
                   cityRouter.route('/:cityId')
                      .get(function (req, res, next) {
                        req.params.cityId = mongoose.Types.ObjectId(req.params.cityId);
                        City.findById(req.params.cityId, function (err, city) {
                          if (err) next(err);
                          console.log(req.params.cityId);
                          res.json(city);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            City.findByIdAndUpdate(req.params.cityId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, city) {
                                if (err) next(err);
                                res.json(city);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            City.findByIdAndRemove(req.params.cityId, function (err, resp) {
                                if (err) throw err;
                                res.json(resp);
                        });
                    });

                    

                    module.exports = cityRouter;


/* 
-


*/
