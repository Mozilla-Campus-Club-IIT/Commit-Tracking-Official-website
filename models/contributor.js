
//to use mongo Db
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining the 'contributor' schema
const contributorSchema= new Schema({
    username:        {type:String ,required :true},
    numberOfCommits: {type:Number ,required :true},
    profilePicUrl:   {type:String ,required :true}
});

//exporting the scema model to be able to use it in other files
const Contributor = module.exports=mongoose.model("Contributor" , contributorSchema);