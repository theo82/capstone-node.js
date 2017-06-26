var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParkSchema = new Schema({
  
   
   image: {
    type: String,
   
   },
   label: {
    type: String,
   }       
   },{
  
    timestamps: true
   });                    
   var Park = mongoose.model('Park',ParkSchema);

   module.exports = Park;

/* 
[
                {
                  "id": 0,
                  "image": "img/alcazar-park/alcazar-park1.jpg",
                  "label": ""
                },
                {
                  "id": 1,
                  "image": "img/alcazar-park/alcazar-park2.jpg",
                  "label": ""
                },
                {
                  "id": 2,
                  "image": "img/alcazar-park/alcazar-park3.jpg",
                  "label": ""
                },
                {
                  "id": 3,
                  "image": "img/alcazar-park/alcazar-park4.jpg",
                  "label": ""
                },
                {
                  "id": 4,
                  "image": "img/alcazar-park/alcazar-park5.jpg",
                  "label": ""
                },
                {
                  "id": 5,
                  "image": "img/alcazar-park/alcazar-park6.jpg",
                  "label": ""
                },
                {
                  "id": 6,
                  "image": "img/alcazar-park/alcazar-park7.jpg",
                  "label": ""
                },
                {
                  "id": 7,
                  "image": "img/alcazar-park/alcazar-park8.jpg",
                  "label": ""
                },
                {
                  "id": 8,
                  "image": "img/alcazar-park/alcazar-park9.jpg",
                  "label": ""
                },
                {
                  "id": 9,
                  "image": "img/alcazar-park/alcazar-park10.jpg",
                  "label": ""
                },
                {
                  "id": 10,
                  "image": "img/alcazar-park/alcazar-park11.jpg",
                  "label": ""
                },
                {
                  "id": 11,
                  "image": "img/alcazar-park/alcazar-park12.jpg",
                  "label": ""
                },
                {
                  "id": 12,
                  "image": "img/alcazar-park/alcazar-park13.jpg",
                  "label": ""
                }
]
*/