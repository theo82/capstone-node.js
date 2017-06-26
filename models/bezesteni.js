var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BezesteniSchema = new Schema({
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
   var Bezesteni = mongoose.model('Bezesteni',BezesteniSchema);

   module.exports = Bezesteni;

/* 
[
                    {
                        "id":0,
                        "description":"The word Bezesteni comes from the Arabic word 'bez' which means cotton and the word 'bezzaz' which describes a textiles merchant.",
                        "image":"img/bezesteni/bezesteni1.jpg",
                        "image_desc":"The Bezesteni"
                    },
                    {
                        "id":1,
                        "description":"The Bezesteni was an important institution of the Ottoman Empire, as ottoman cities were divided in two categories, the ones with a Bezesteni and the ones without.Its existence in a city indicated that it was an important commercial center, busy with people.It was a rectangular building measuring 30 by 20 meters, which hosted 21 shops, all tiled. Its architecture was based on the architecture of Ιslamic mosques with domes and each side had an entry leading to its interior. It had a domed roof consisting of 6 domes built of brick, supported by two double arches on two large pillars. The domes were externally covered in lead, so that they could withstand humidity.On the north side there was a small room with an arched ceiling, measuring 3.5 by 4.5 meters. It is believed that it was the treasury where the belongings of the city's rich were kept, as well as the city's archives.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":2,
                        "description":"",
                        "image":"img/bezesteni/bezesteni2.jpg",
                        "image_desc":"One of the entrances"
                    },
                    {
                        "id":3,
                        "description":"Its construction lasted twenty-two years from 1484-1506 AD and was the commercial heart of the city, as the local market developed around it.In Bezesteni in addition to fabrics, gold, silver, jewelry, items made of amber and precious stones were also traded, while it stored precious goods, heritages of citizens and belongings of rich Muslims.In Bezesteni was also taking place the quality control of traded goods and the parities of currencies were set.It was the center of Larisa’s market, it’s most vital part. It was the core of economic activity and of numerous professional guilds, and around it the commercial part of the city was organized, with tsarsi (large permanent market) and the pazari (the space of the outdoor weekly market).It maintain its commercial character until the 18th century.In the late 19th century it was used as a powder warehouse.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":4,
                        "description":"",
                        "image":"img/bezesteni/bezesteni3.jpg",
                        "image_desc":"Interior view"
                    },
                    {
                        "id":5,
                        "description":"",
                        "image":"img/bezesteni/bezesteni4.jpg",
                        "image_desc":"Interior view"
                    },
                    {
                        "id":6,
                        "description":"",
                        "image":"img/bezesteni/bezesteni5.jpg",
                        "image_desc":"Interior view"
                    },
                    {
                        "id":7,
                        "description":"Bezesteni was an important institution of the Ottoman Empire. Ottoman cities were divided into two categories, those that had Bezesteni and those who had not. The geopolitical position of Larissa and the rich inland are important advantages to the Ottoman conquerors in order to develop artisanal and commercial activities. In this way Larissa is enlisted as the first city in Thessaly in terms of production and tax revenues for the Ottoman state. Having a Bezesteni, was a sign that the city was an important commercial center with very significant traffic.The first written mention of the Bezesteni, is made in Ottoman census of 1506 AD where appears to belong to the Omer Bei. In the text of a 17th century traveler, is referred to as a building, itself a fortress, as an impregnable castle.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":8,
                        "description":"Evliya Çelebi (1668), the first traveler who refers to the building, notes: ' At the heart of the city, at the center of the market and bazaar lies Bezesteni, like a fortress, with stone made dome and four iron doors, as it is the shelter of the city and it’s impregnable castle. In there, wealthy merchants sell precious things. There are 21 commercial shops. All of them covered with roof tiles ... Near nightfall sound the drums around town and the armed guards secure all the doors and start guarding the area. The shops are located around Bezesteni and form a market and bazaar more secure than a castle with merchandise worth thousands of times more than the treasure of Egypt.'",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":9,
                        "description":"",
                        "image":"img/bezesteni/bezesteni6.jpg",
                        "image_desc":"Exterior view"
                    },
                    {
                        "id":10,
                        "description":"The last written report on its operation is at 1779 where its lead covered domes are described. Probably it was originally destroyed in the earthquake in 1781 and the destruction was completed by a fire that broke out a few years later. In later years, after changes in its external form, it was used as a powder warehouse and as a fortress (this is the origin of its current name Frourio (Fortress). In 1881 with the liberation of Thessaly and Larissa, the Greek flag rises in Bezesteni.Today only four stone walls of the building are preserved, 1.6 meters thick and up to a height of about 6.5 meters above the ground level. Bezesteni currently has four doors, three gates and a small door on the north side. By the end of the 70s, Bezesteni was nearly all covered with soil. In 1976 the Archaeological Service removed the embankments and supported the walls of the monument. After those works, the building was used as a warehouse and for workshops of ceramic and mosaics by the 7th Ephorate of Byzantine Antiquities, in Larissa. The Bezesteni of Larissa is a monument of great historical significance and is planned to be restored in the future by the respected authorities.",
                        "image":"",
                        "image_desc":""
                    },
                    
                    
]
*/