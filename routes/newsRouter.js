                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var News = require('../models/news')
                    
                    var newsRouter = express.Router();
                    
                    newsRouter.use(bodyParser.json());
                    
                    newsRouter.route('/')
                    .get(function(req,res,next){
                        News.find(req.query)
                            .sort('-date')
                            .populate('comments.postedBy')
                            .exec(function (err, news) {
                                if (err) return next(err);
                                res.json(news);
                            });
                    })
                    .post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
                       News.create(req.body,function(err,news){
                          if(err) throw err;

                          console.log('News created')
                          var id = news._id;

                          res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           res.end('Added the article with id: ' + id);
                       })
                    })
                    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function (req, res, next) {
                            News.remove({}, function (err, resp) {
                                if (err) return next(err);
                                res.json(resp);
                            });
                    });
                   
                   newsRouter.route('/:newsId')
                    .get(function (req, res, next) {
                        News.findById(req.params.newsId)
                            .populate('comments.postedBy')
                            .exec(function (err, news) {
                            if (err) throw err;
                            res.json(news);
                        });
                    })

                    .put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            News.findByIdAndUpdate(req.params.newsId, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, news) {
                                if (err) return next(err);
                                res.json(news);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            News.findByIdAndRemove(req.params.newsId, function (err, resp) {
                                if (err) throw err;
                                res.json(resp);
                        });
                    });

                    newsRouter.route('/:newsId/comments')
                        
                       .get(Verify.verifyOrdinaryUser, function (req, res, next) {
                                News.findById(req.params.newsId)
                                    .populate('comments.postedBy')
                                    .exec(function (err, news) {
                                        if (err) throw err;
                                        res.json(news);
                                    });
                        })

                        .post(Verify.verifyOrdinaryUser,function (req, res, next) {
                            News.findById(req.params.newsId, function (err, news) {
                                if (err) return next(err);
                                req.body.postedBy = req.decoded._id;
                                news.comments.push(req.body);
                                news.save(function (err, news) {
                                    if (err) return next(err);
                                    console.log('Updated Comments!');
                                    res.json(news);
                                });
                            });
                        })

                        .delete(Verify.verifyAdmin,function (req, res, next) {
                            News.findById(req.params.newsId, function (err, news) {
                                if (err) return next(err);
                                for (var i = (news.comments.length - 1); i >= 0; i--) {
                                    news.comments.id(news.comments[i]._id).remove();
                                }
                                news.save(function (err, result) {
                                    if (err) throw err;
                                    res.writeHead(200, {
                                        'Content-Type': 'text/plain'
                                    });
                                    res.end('Deleted all comments!');
                                });
                            });
                        });

                    newsRouter.route('/:newsId/comments/:commentId')
                        
                        .get(Verify.verifyOrdinaryUser,function (req, res, next) {
                            News.findById(req.params.newsId)
                                .populate('comments.postedBy')
                                .exec(function (err, news) {
                                    if (err) return next(err);
                                    res.json(news.comments.id(req.params.commentId));
                                });
                        })

                        .put(Verify.verifyOrdinaryUser,function (req, res, next) {
                            // We delete the existing commment and insert the updated
                            // comment as a new comment
                            News.findById(req.params.newsId, function (err, news) {
                                if (err) return next(err);
                                news.comments.id(req.params.commentId).remove();
                                req.body.postedBy = req.decoded._id;
                                news.comments.push(req.body);
                                news.save(function (err, news) {
                                    if (err) return next(err);
                                    console.log('Updated Comments!');
                                    res.json(news);
                                });
                            });
                        })

                        .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            News.findById(req.params.newsId, function (err, news) {
                                
                                news.comments.id(req.params.commentId).remove();
                                news.save(function (err, resp) {
                                    if (err) throw err;
                                    res.json(resp);
                                });
                            });
                    });

                    module.exports = newsRouter;


/* 
{
	"title":"Camping in the City and this year.",
	"description":"From the Municipality of Larissa, and in particular the Social Policy Advocacy and the Department of Sports and Culture and Social Policy, it is announced that following the absolutely successful 'Camping in the City' program, organized last summer, the Municipality of Larissa in collaboration with the citys stakeholders, the program Will be implemented this year as well."
}
{
	"rating":"4",
	"comment":"Cool",
	"author":"Vasilis"
}

*/
