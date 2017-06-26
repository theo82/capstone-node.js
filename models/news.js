var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var newsSchema = new Schema({
   title: {
       type: String,
       required: true,
       unique: true
   },
   image: {
       type: String,
       required: true,
       unique:true
   },    
   description: {
       type: String,     
       required: true
       },
       comments: [commentsSchema]
   },{
     timestamps: true
   });                         
   var News = mongoose.model('News',newsSchema);

   module.exports = News;
//594d26202eeeb82608c0eba8


/* 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZW85MCIsIl9pZCI6IjU5NGQ2NTIxNWQ0M2IxMTA0NDhmMjA5YiIsImFkbWluIjp0cnVlLCJpYXQiOjE0OTgyNDQ0MDIsImV4cCI6MTQ5ODI0NDc2Mn0.zxbkfeJA52Nzs9nli_M9mqrwR30oRwMUCdpz0otOsjM

[
    {
      "id": 0,
      "title": "Camping in the City and this year.",
      "image": "img/news1.jpg",
      "label": "",
      "description": "From the Municipality of Larissa, and in particular the Social Policy Advocacy and the Department of Sports and Culture and Social Policy, it is announced that following the absolutely successful 'Camping in the City' program, organized last summer, the Municipality of Larissa in collaboration with the citys stakeholders, the program Will be implemented this year as well.",
      "comments": [
       
      ]
    },
    {
      "id": 1,
      "title": "Events of the Municipality of Larissa for the Environment Day.",
      "image": "img/news2.jpg",
      "label": "",
      "description": "Three-day events for the Environment Day, organized by the Municipality of Larissa and in particular the Environmental Protection Board, in cooperation with the citys representatives.The events will be held on 25, 26 and 27 May, in Larissa and in Amygdalea, and especially in the area of the holy temple of Agios Nikolaos, called Mikra Tempi.",
      "comments": [
       
      ]
    },
    {
      "id": 2,
      "title": "Pupils traveled to the National Resistance Museum.",
      "image": "img/news3.jpg",
      "label": "",
      "description": "The 3rd Grade of Sikouri High School in particular, 31 students were guided to the museums premises and exhibition by Mr. Bepha Giannis, a philologist, who referred to the history and importance of the building but, above all, to the struggle of the National Resistance For Freedom fighters , Independence and justice. The visit to the Museum is part of educational activities in connection with the history lesson. The students were accompanied by the school principal, Mr. Koutzontis Georgios, as well as the professors Zioga Vasiliki, Athanasopoulou Eleftheria and Banioti Maria. ",
      "comments": [
       
      ]
    },
    {
      "id": 3,
      "title": "At the final stage, the New State Swimming Pool.",
      "image": "img/news4.jpg",
      "label": "",
      "description": "At the final stage is the case of the completion of the New State Swimming Pool. On Tuesday afternoon, the Mayor of Larissa Ap. Kalogiannis, members of the municipal authority, officials and contractors of the project were found at the Swimming Pool. The municipal authority's goal is to speed up the latest procedures for its operation. Swimming pools (large open and small indoor) are filled with water, while the tests of the equipment and the relevant specifications are constant. It is noted that in the first phase the swimming pool will be given for trial operation in clubs and after the completion of all the necessary tests will follow its delivery for use by the general public. Also, in a few days and more specifically on June 29, the auction for the completion of the Swimming Pool will be auctioned, with a budget of 309.00 euros, funded by the General Secretariat for Sport. However, it is clarified that for the start of the trial operation of the swimming pool, it is not necessary to complete the specific contract. ",
      "comments": [
       
      ]
    },
    {
      "id": 4,
      "title": "A delegation of the Municipality of Larissa departs for Anapa of Russia.",
      "image": "img/news1.jpg",
      "label": "",
      "description": "For the city of Anapa in the Russian Federation, a delegation from the Municipality of Larissa is leaving today (08/06/2017). The visit to the twinned city of Larissa is at the invitation of the Mayor of Anapa and in return for the visit of the delegation of the Russian city held last December. The head of the mission is the mayor of Apostolos Kalogiannis, and the chairman of the Municipal Council Dim. Tahos, Deputy Mayors G. Soultos and P. Dasis and the opposition councilors Dim. Georgakis and Athan Mamakos",
      "comments": [
       
      ]
    },
    ,
    {
      "id": 4,
      "title": "Today the Town Hall of Larissa is closed.",
      "image": "img/news5.jpg",
      "label": "",
      "description": "A new strike gathering is taking place this morning at the City Hall of Larissa with contract staff in the cleaning service, participating in the call of the Association of Employees of the Municipalities of Larissa. In the context of the mobilization and support of contract staff, the Municipality of Larissa will be closed by decision of the Municipal Council, while the only services that will operate are the welfare structures. It is well known that cleaners - whose contracts are renewed by the end of 2017 - are threatened to lose their jobs immediately after the Court of Auditors' plenary decision that contract renewals were considered unconstitutional.",
      "comments": [
       
      ]
    }
    
  ]
*/