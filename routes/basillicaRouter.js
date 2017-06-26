                    var express = require('express');
                    var bodyParser = require('body-parser');
                    var mongoose = require('mongoose');
                    var Verify = require('./verify');
                    var Basillica = require('../models/basillica')

                    var basillicaRouter = express.Router();
                    
                    basillicaRouter.use(bodyParser.json());
                    
                    basillicaRouter.route('/')
                    .get(function(req,res,next){
                        
                        Basillica.find(req.query)
                            
                            .exec(function (err, basillica) {
                                if (err) return next(err);
                                res.json(basillica);
                                
                            });
                    })
                    .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
                       Basillica.create(req.body,function(err,basillica){
                          if(err) throw err;

                          console.log('Basillica created')
                          var id = basillica._id;
                        
                            res.writeHead(200,{
                             'Content-Type':'text/plain' 
                          }); 
                           
                           res.end('Added the basillica info with id: ' + id);
                       })   
                          
                    })
                    
                    .delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function (req, res, next) {
                            Basillica.remove({}, function (err, resp) {
                                if (err) return next(err);
                                res.json(resp);
                            });
                    });
                   
                   basillicaRouter.route('/:basillicaId')
                      .get(function (req, res, next) {
                        req.params.basillicaId = mongoose.Types.ObjectId(req.params.basillicaId);
                        Basillica.findById(req.params.basillicaId, function (err, basillica) {
                          if (err) return next(err);
                          console.log(req.params.basillicaId);
                          res.json(basillica);
                        });
                      })

                    .put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
                            Basillica.findByIdAndUpdate(req.params.basillica, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, basillicaId) {
                                if (err) return next(err);
                                res.json(basillicaId);
                        });
                    })

                    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
                            Basillica.findByIdAndRemove(req.params.basillica, function (err, resp) {
                                if (err) return next(err);
                                res.json(resp);
                        });
                    });

                    

                    module.exports = basillicaRouter;


/* 
{
      "id": 0,
      "image": "img/about/larisa1.jpg",
      "description": "In the city of Larissa there are the Department of Medicine and the Department of Biochemistry-Biotechnology of the School of Health Sciences of the University of Thessaly, TEI with 4 Schools and 16 Departments, the Regional University Hospital, the Chamber of Commerce, Industry and Crafts, Regional Theater - 'Thessalian Theater', Municipal Conservatory. The town has a Folklore Museum, while the Archaeological-Byzantine Museum is erected. The Art Gallery-GI Museum Katsigra is housed in a new building, whose inauguration took place in 2003 by the President of the Republic."
    },
    {
      "id": 1,
      "image": "",
      "description": "It was completed in the rebuilding of a typical industrial sample of the beginning of the century, the 'Pappa Mill', and the city's first Ancient Theater is revealed in a rapid rhythm. Typical is the intense cultural activity through the action of the legal entities of the Municipality, as well as the various actions through bodies, clubs, initiative groups and sports clubs of all sports.The redevelopment of the city center and the hill of the Fortress with the exploitation of the elements of tradition and the extensive footpaths, highlights the historical identity of the city, as well as a strong commercial and recreational activity with a positive impact on the psychology of citizens moving in the city center."
    },
    {
      "id": 2,
      "image": "",
      "description": "Parks, parks and green lungs in the neighborhoods, sports centers, daycare centers, KAPI, infrastructure, road, water, sewerage, biological cleaning, natural gas, as well as a strong urban regeneration activity began to give In the last few years, positive results, giving Larissa a picture of a modern European city.Nowadays, in the course of the third millennium, taking advantage of the favorable climate, which is slowly being established in the area of Local Government, Larissa, with the actions and initiatives of the Municipal Authority, strives to achieve a better social, spiritual and cultural future."
    },
    {
      "id": 3,
      "image": "",
      "description": "The Municipality of Larissa showed a keen interest, activity and projects in shaping an overall policy that highlights these elements at its core, building on national and European experience and capabilities of many scientific bodies and local authorities through collaborative research and applications."
    },
    {
      "id": 4,
      "image": "img/about/larisa2.jpg",
      "description": "Central Square"
    },
    {
      "id": 5,
      "image": "img/about/larisa3.jpg",
      "description": "Park of Alkazar"
    },
    {
      "id": 6,
      "image": "img/about/larisa4.jpg",
      "description": "Second Ancient Theatre"
    },
    {
      "id": 7,
      "image": "img/about/larisa5.jpg",
      "description": "Taxudromeiou Square"
    }


*/
