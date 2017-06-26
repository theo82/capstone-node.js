var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var secondTheatreSchema = new Schema({
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
   var secondTheatre = mongoose.model('secondTheatre',secondTheatreSchema);

   module.exports = secondTheatre;



/*
    [
                    {
                        "id":0,
                        "description":"Ancient theatre B’ lies west of ancient theatre A’ has a tripartite scene raised on a stone platform preserved at a height of 0,60m while its upper part was built of mud bricks and had wooden roof.",
                        "image":"img/second_ancient_theatre/second_ancient_theatre1.jpg",
                        "image_desc":""
                    },
                    {
                        "id":1,
                        "description":"Behind the scene was an enclosure wall was unearthed along 50,50m. The west parodos was revealed along a length of 9m., while the east one was partly excavated, since its biggest section lies under the modern road. In the west sector of the orchestra there is a stepped podium, probably belonging to the altar (thymele).The koilon is divided by fourteen stairways into thirteen sectors, each one comprising two tiers of marble seats. The stones of the tiers belonged to an earlier, obviously by then destroyed, edifice.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":2,
                        "description":"",
                        "image":"img/second_ancient_theatre/second_ancient_theatre2.jpg",
                        "image_desc":"The koilo and scene"
                    },
                    {
                        "id":3,
                        "description":"",
                        "image":"img/second_ancient_theatre/second_ancient_theatre3.jpg",
                        "image_desc":"The thymele"
                    },
                    {
                        "id":4,
                        "description":"",
                        "image":"img/second_ancient_theatre/second_ancient_theatre4.jpg",
                        "image_desc":"The scene"
                    }
                    
   ]
*/