var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MillSchema = new Schema({
   description:{
    type: String,
    
   },
   
   image: {
    type: String,
   
   },
   image_desc: {
    type: String,
    
   }    
   },{
  
    timestamps: true
   });                    
   var Mill = mongoose.model('Mill',MillSchema);

   module.exports = Mill;

/* 
[
                            {
                              "id": 0,
                              "image": "",
                              "description": "The mill was a watermill, windmill, roller in successive phases of its development since its foundation in the late 19th century until the 1980s that stopped its activity.",
                              "image_desc":""    
                            },
                            {
                              "id": 1,
                              "image": "img/mill_of_pappas/mill_of_pappas1.jpg",
                              "description": "",
                              "image_desc":"The Mill of Pappas" 
                            },
                            {
                              "id": 2,
                              "image": "",
                              "description": "The Mill's history begins in 1893, when our townsmen Konstantinos Pappas, Konstantinos Skalioras and Christos Dimitriades purchased a 10-acre area in the district of Tabakiκa, established the enterprise and put the mill in motion, at an era when Larissa still maintained the colour of a Turkish city.This mill however is different from the others as it was powered by steam, something which constituted a significant technological leap for its era.Active men and capable entrepreneurs, they soon managed to establish a branch in Volos and distribute their production through its port to the entire Greece.",
                              "image_desc":""     
                            },
                            {
                              "id": 3,
                              "image": "img/mill_of_pappas/mill_of_pappas2.jpg",
                              "description": "In the beginning of 1900, Fotis Pappas, the nephew of Konstantinos Pappas who had been working by the side of his uncle from the age of 10 learning the secrets of the trade, took over.Fotis Pappas evolves into the enterprise's leader, leading the Mill tο its rise.The flour production is increasing and the Mill of Pappa becomes the main feeder entire Thessaly.Fotis Pappas had faceted activity and citizenship. He offered the Macedonian struggle, was president of the Commercial Association of Larissa, spearheaded the effort water and lighting of the town, alderman elected.The latest figurehead of the mill and successor of Fotis Pappas was his son, Angelos Pappas. Studyingeconomics at the University of Athens, he took over leadership of the company in early 1960 and remained until its closure in 1983.",
                              "image_desc":"" 
                            },
                            {
                              "id": 4,
                              "image": "img/mill_of_pappas/mill_of_pappas4.jpg",
                              "description": "",
                              "image_desc":"The Mill of Pappas" 
                            },
                            {
                              "id": 5,
                              "image": "img/mill_of_pappas/mill_of_pappas5.jpg",
                              "description": "",
                              "image_desc":"The Mill of Pappas" 
                            },
                            {
                              "id": 6,
                              "image": "img/mill_of_pappas/mill_of_pappas6.jpg",
                              "description": "",
                              "image_desc":"The Mill of Pappas" 
                            },
                          ]
*/