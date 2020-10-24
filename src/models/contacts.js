const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const usr=mongoose.model('usrD');
const contacs_Schema=new Schema({
 
    emai: String,
     
    phone: Number,
    
    name: String,
    
    user: {type: Schema.ObjectId, ref: usr }

  
});
module.exports=mongoose.model('contacts', contacs_Schema);
