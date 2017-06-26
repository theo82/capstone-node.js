var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BasillicaSchema = new Schema({
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
   var Basillica = mongoose.model('Basillica',BasillicaSchema);

   module.exports = Basillica;


/*[
                    {
                        "id":0,
                        "description":"",
                        "image":"img/basilica/basilica1.jpg",
                        "image_desc":"The ruins of the basilica"
                    },
                    {
                        "id":1,
                        "description":"Excavations which took place in July 1978, during the shaping of the market space, brought to light the temple which investigated more thoroughly in the coming years under the supervision of the Superintendent of Byzantine Antiquities, Av. Deriziotis.It was a three aisled building with an arch to the east, a narthex and masonry.The building did not retain signs of pillars or floors, the only exception being a segment of a mosaic in the narthex, whose style places the erecting of the temple to the 6th or 7th century.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":2,
                        "description":"",
                        "image":"img/basilica/basilica2.jpg",
                        "image_desc":"The mosaic"
                    },
                    {
                        "id":3,
                        "description":"The style of this mosaic testifies thah the temple was constructed in the 6th or 7th century. During the excavation inside the temple, came to light a few marbles, which are not dated, although most of them had been reused as a covering plates on the graves which were probably existed before the basilica.The two vaulted graves, as well as the many box-shaped graves that were found in the interior succeed the basilica, as they have extensively damaged the mosaic.The grave of the north aisle, which is identified as the one of St Achilles due to the niche and the rich decorations is also subsequent, probably from the 8th century and was built on the location of the original burial, following the finding of the relic. The discovery of graves both inside and outside the temple shows that it was used as a cemetery not only during the Middle Byzantine times, but also during the 13th century.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":4,
                        "description":"",
                        "image":"img/basilica/basilica3.jpg",
                        "image_desc":"Grave"
                    },
                    {
                        "id":5,
                        "description":"Saint Achilles was born in Cappadocia in Asia Minor in 270 AD. St Achilles inherited a large fortune, but he divided to the Christians who were poor, widows, orphans and the needs of the Church.The Saint preached the gospel and thus lead many people from the darkness of paganism in the light of Christ. He baptized all those who taught. By the grace of God acquired the gift of miracles. He finally arrived in Thessaly, where the Church placed him in the throne of the Archdiocese of Larissa , which fell several dioceses. He participated in the First Ecumenical Council of Nicaea (325 AD) when Emperor of the Byzantine Empire was the great Constantine. He was one of the most militant strains of the Ecumenical Council against the heretic Arius. His relics are in Prespa in Bulgaria.He passed away in peace at the end of 355 A.D. and his sacred relic was placed in a larnax. From the small island of Prespa where it had been taken to, it returned to the Metropolitan Church of Larissa in 1981 and remains there until today.Our Church celebrates his memory on the 15th of May.",
                        "image":"",
                        "image_desc":""
                    }
                    
                    
                ]
*/