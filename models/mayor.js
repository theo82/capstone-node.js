var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var mayorSchema = new Schema({
   title: {
       type: String
   },      
   image: {
       type: String
   },  
   description: {
       type: String,     
       
       }
   },{
     timestamps: true
   });                         
   var Mayor = mongoose.model('Mayor',mayorSchema);

   module.exports = Mayor;
