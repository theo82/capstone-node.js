var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
   title:{
    type: String,
    
   },
   
   date: {
    type: String,
   
   }    
   },{
  
    timestamps: true
   });                    
   var Events = mongoose.model('Events',EventsSchema);

   module.exports = Events;

/* 
[
                            {
                              "id": 0,
                              "title": "On Friday, May 26, 2017, events of the Municipality of Larissa will be held in memory of the 40 executed Patriots on March 8, 1944, by the fascist occupation forces.",
                              "date": "19/5/2017"
                            },
                            {
                              "id": 1,
                              "title": "The Municipality of Larissa, in the framework of informing the farmers about rural development, organizes in cooperation with GAIA Business, a workshop for the producers of the Municipality, on the subject: Exploiting financial and development tools For the organization of Greek production. The event will take place at the Cultural Center of the Valley, on Thursday 18th May at 8pm.",
                              "date": "17/5/2017"
                            },
                            {
                              "id": 2,
                              "title": "Exhibition of paintings and applied arts of the students of the adult departments of the Cultural Clubs of the Municipality of Larissa, is inaugurated on Sunday, April 7, at 8.30 pm. The exhibition will be hosted at the Hatzigiannio Cultural Center.",
                              "date": "8/5/2017"
                            }
                          ]
*/