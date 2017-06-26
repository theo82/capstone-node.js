var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnnouncementsSchema = new Schema({
   title:{
    type: String,
    
   },
   
   date: {
    type: String,
   
   }    
   },{
  
    timestamps: true
   });                    
   var Announcements = mongoose.model('Announcements',AnnouncementsSchema);

   module.exports = Announcements;


/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZW84MSIsIl9pZCI6IjU5NGRmOGVlY2NlZGNjMjM2Y2JiNGFkNyIsImFkbWluIjp0cnVlLCJpYXQiOjE0OTgzNzQxNjksImV4cCI6MTQ5ODM3Nzc2OX0.IqzPUeTsfFrIaoIkzQcMQ5SJTVL8YCMAMidgCWWzpa0
[
                            {
                                _id: 0,
                                title:"We would like to inform you that due to the postponement of the meeting of the Municipal Council on Wednesday, 24-05-2017, the designated Meeting of the Quality of Life Committee on Wednesday 24-05-2017 is postponed and will be held on Monday 29-05-2017 at 11:30 am .m.",
                                date: "24/5/2017"
                            },
                            {
                                _id: 1,
                                title:"We are informing you that due to the day-to-day depression of the World Council of Hellenes Abroad, todays meeting of the Municipal Council will take place and will be held on the same day 24-05-2017 and 14.30 hour.",
                                date: "23/5/2017"    
                                
                            },
                            {
                                _id: 2,
                                title:"We invite you to come to the Municipal Council on Thursday, May 25th, 2017 at a meeting of the Economic Committee, to discuss the agenda items that you can find on the SITE of the Municipality of Larissa",
                                date: "19/5/2017"
                            }
                        ]
*/