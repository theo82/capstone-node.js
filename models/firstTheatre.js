var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var firstTheatreSchema = new Schema({
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
   var FirstTheatre = mongoose.model('FirstTheatre',firstTheatreSchema);

   module.exports = FirstTheatre;



/*
    [
                    {
                        "id":0,
                        "description":"The first excavation research, which identified the first ancient theater, took place in 1910 when the then Archbishop of Antiquities, Ap. Arvanitopoulos, revealed part of his stage. At the beginning of the 20th century, over a monument (which was not visible), a street was built and various buildings (houses, workshops, shops) were built, some of which, with their deep foundations, caused irreparable damage to the monument. Since 1977, a systematic effort has been made for the complete disclosure and promotion of the monument with excavations and expropriations of buildings, which continues, from the EO of Prehistoric and Classical Antiquities.",
                        "image":"img/first_ancient_theatre/first_ancient_theatre1.jpg",
                        "image_desc":"The A' first theatre"
                    },
                    {
                        "id":1,
                        "description":"The first ancient theater of Larissa was built in the first half of the 3rd century. BC, in the years of King Antigonus Gonatas, as after the death of Alexander the Great, during the Hellenistic era, Thessaly was part of the kingdom of Macedonia. Its construction site, on the southern foothills of the acropolis hill, was dictated by the location of the city, and for this reason is incompatible with the directive of the Roman architect Vitruvius, for the selection of the location of the theaters.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":2,
                        "description":"The main theater is divided by ten elevation scales in eleven denominations, with twenty-five rows of marble seats, each of which was the first to be in the presidential row. In its present form, as it was transformed into Roman times for its transformation into a arena, it rescues twenty-one rows of seats. In the middle of their upper surface they have a shallow pile, which was used to define the space where the feet of the spectators of the overlying rows stood. On top of all the halls there are inscriptions with names, probably of the representatives of the cities of the Common House of Thessalians.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":3,
                        "description":"The frieze, a 2m wide corridor, paved with white marble, served the viewers' comfortable movement, dividing the hollow into two sections, the main theater and the epitaph.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":4,
                        "description":"For the formation of the epitheter and to cover the sharp altitude difference of the carriage, a strong sloping wall of 1.30 m was built with white marble blocks on its main face and porosity inside it. Most of the epithet has unfortunately been destroyed. The access from the frieze to this was done with twenty scales, which led to twenty-two stands, each of which had fifteen rows of seats.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":5,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre2.jpg",
                        "image_desc":"The hollow and the orchestra"
                    },
                    {
                        "id":6,
                        "description":"The theater orchestra, with a diameter of 25,50 m, runs through a duct, perfectly preserved, for the removal of storm water. It has a width of 1.90 m, it is constructed and covered with marble slabs and has exits from both ends of the orchestra. The lanes of the lanes bounded the theater's entrances and held back the huge volume of the hollows. They are made of white marble stones. The absorption of the western passage was revealed in a length of 40.86, 4.5 in height and 3.55 m in width. In its view, traces of the steps of a monumental scale, which led to the frieze, can be seen.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":7,
                        "description":"The tent is the best preserved part of the monument. It is made of porous stone, consists of ground floor and one floor, it is 37,50 m long and it is preserved at a height of 3 m. The two middle rooms, communicating with each other from a common corridor where one enters from the main entrance of the stage, will Were probably used as actors' dressing rooms.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":8,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre3.jpg",
                        "image_desc":"Scene-Top view"

                    },
                    {
                        "id":9,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre4.jpg",
                        "image_desc":"Scene - Left side"
                    },
                    {
                        "id":10,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre5.jpg",
                        "image_desc":"Scene - Right side"
                    },
                    {
                        "id":11,
                        "description":"At the front of the scene, the proscenium is preserved in perfect condition, having a total length of 20m. and width of 2m. The proscenium colonnade consists of six antae and six monolithic semi-columns, standing on an euthenteria (top course of the foundation) built of marble blocks, 0,30m in height. The semi-columns and pillars supported the overlying entablature. The proscenium had three entrances, corresponding to the three doors of the scene.",
                        "image":"",
                        "image_desc":""
                    },
                    {
                        "id":12,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre6.jpg",
                        "image_desc":"The scene-Side view"
                    },
                    {
                        "id":13,
                        "description":"",
                        "image":"img/first_ancient_theatre/first_ancient_theatre7.jpg",
                        "image_desc":"The scene-Front view"
                    },
                    {
                        "id":14,
                        "description":"The theatre was remodeled during the time of Emperor Octavian Augustus (28 B.C. – 14 A.D.) and his successor Tiberious (14-31 A.D.). Inscriptions in honour of both these emperors were found across the cornice of the proscenium. To the south of the scene came to light a layer of limestone drums from Doric columns. The time and purpose of their deposition at that place has not yet been defined by the study team of the monument. Combats of professional gladiators were very popular spectacles in the Roman period and Larissa was especially known for gladiator fights. This information is ascertained by three funerary steles with relevant representations from Larissa, dated to the 2nd an 3rd cent A.D. In order for the ancient theatre A’ of Larissa to be remodeled as arena, modifications were made by cutting away the lowest three tiers of seats around the orchestra and constructing a high wall for the safety of the spectators.",
                        "image":"",
                        "image_desc":""
                    }
]
*/