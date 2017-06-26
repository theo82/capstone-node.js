var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var deputyMayorSchema = new Schema({
   name: {
       type: String
   },      
   image: {
       type: String
   },  
   role: {
       type: String
   },
   office: {
       type: String
   },
   address: {
       type: String
   },
   Tel: {
       type: String
   },      
   email: {
       type: String,     
       
       }
   },{
     timestamps: true
   });                                   
   var DeputyMayor = mongoose.model('DeputyMayor',deputyMayorSchema);

   module.exports = DeputyMayor;
