var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var churchSchema = new Schema({
   image: {
       type: String
   },  
   description: {
       type: String,     
       
       }
   },{
     timestamps: true
   });                         
   var Church = mongoose.model('Church',churchSchema);

   module.exports = Church;


/* 
[
                            {
                              "id": 0,
                              "image": "",
                              "description": "Saint Achillius was descended from a wealthy gentle family of Cappadocia. He was born around 270 AD and soon he was distinguished for his piety and his love for Christ and his Church. After the death of his parents, he distributed his fortune to the poor and weak, and began the priesthood in the Holy Land of Palestine and Rome, in the tombs of the Holy Apostles.n this Ipapostolic journey he received the Holy Priesthood and once arrived in Larissa, where he was the Bishop. His reputation as a saint and virtuous cleric had spread to Thessaly ... before he settled himself, so with the agreement of clergy and people rises to the episcopal throne of Larissa. Everyone talks about the Holy Hierarch who practices the spiritual cultivation of his flock, the healing of people's mental and physical injuries, and the philanthropic work.In 325 AD he takes part in the 1 nd Ecumenical Council convened by M.Konnon in Nicaea, Bithynia, which condemned the heresy of the Supreme, who contended that Christ is not Son and the Word of God, Homosexual with the Father , But a building. At this meeting, along with the other Holy Fathers (St. Athanasius, St. Nicholas, St. Spyridon, etc.), with boldness proclaims that Christ is God, congenial to the Father, and even provokes the Marians if their words are Correctly to get oil out of a stone that was there.Of course, those fearful and cowardly resist the challenge to the Holy One of God, and Hierarch Achillius. He did not get to finish his word, and the miracle oil too began to flow out of the dry stone. The positions of the Orthodox were fixed, the emperor and the Holy Fathers admired the power of faith by glorifying God, while the heretical Christians were broken and humiliated. M.Konnon asks the blessed hierarch to bless him and fills him with royal gifts and financial sponsorships with the Churches and Foundations and generally for the relief of the people of God.His charges were holy and his holiness was about 350-360 AD. His relics immediately became a source of miracles and miracles of varied and abundant myrrh enveloped them, a proof of His Appearing State. The people of Larissa, Thessaly and all of Greece honestly honor the miraculous Saint Achillius for its various benefits and marvels, which people are constantly showing with enthusiasm and gratitude to their graceful remains.",
                              "image_desc":""    
                            },
                            {
                              "id": 1,
                              "image": "img/church/church1.png",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 2,
                              "image": "img/church/church2.png",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 3,
                              "image": "img/church/church3.png",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 4,
                              "image": "img/church/church4.png",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 5,
                              "image": "img/church/church5.jpg",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 6,
                              "image": "img/church/church6.JPG",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 7,
                              "image": "img/church/church7.png",
                              "description": "",
                              "image_desc":"" 
                            },
                            {
                              "id": 8,
                              "image": "img/church/church8.JPG",
                              "description": "",
                              "image_desc":"" 
                            }
]
*/