//axios is use to send http requests from the node api server
const axios = require('axios');
//to user the Contributors objects when making the leaderboard schema
const Contributor= require('./contributor');
//to use mongo Db
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining the 'leaderboard' schema
const leaderboardSchema= new Schema({
    organizationName:{type:String ,required :true},
    repoName: {type:String ,required :true},
    topThree: Array,
    allContributors: Array
});

//exporting the scema model to be able to use it in other files
const Leaderboard = module.exports = mongoose.model("Leaderboard" , leaderboardSchema);


/**
 * getJsonGithub() method gets the JSON related to a particular repo from github using the github api
 * @param {*} organizationName 
 * @param {*} repoName 
 * @param {*} callback
 */
module.exports.getJsonGithub =  function ( organizationName , repoName , callback){
    //creating the github api URL by concatanating the organizationName and repoName
    let url='https://api.github.com/repos/'+organizationName+'/'+repoName+'/stats/contributors';
    //executing the GET request
    let promise = axios.get(url)
    .then(response => { 
        //calling the call back fuction and passing the result of the resloved promise - which is a  JSON object which has information about all the contributors 
        callback(response);
    })
    .catch(error => {
        //if any errors - it is logged
        console.log("error : " + error );
    });
}


/**
 * getFullLeaderboard() method will make a leaderboard object which conatains all contributors and the top three
 * @param {*} organizationName 
 * @param {*} repoName 
 * @param {*} callback (newLeaderboard) 
 */
module.exports.getFullLeaderboard =  function ( organizationName , repoName , callback){

    Leaderboard.getJsonGithub( organizationName , repoName , ( githubJsonObject  )=>{

        //this variable will be used to stare the array containing the top three contributors
        let topThreeArray=[];
        //this variable will be used to stare the array containing the whole leaderboard
        let fullLeaderboardArray=[];

        //saving the array of contributors to a varable
        let contributorsArray = githubJsonObject.data;
        //sorting the array of contributors based on the total commits
        contributorsArray.sort(function(contributorCurrent, contributorNext){
            return contributorNext.total-contributorCurrent.total
        });

        //loop through objects of the contributors array , creates new Contributor and add to the topThreeArray and/or fullLeaderboardArray 
        for(let i=0 ; i < contributorsArray.length  ; i++ ){
            let newContributor = new Contributor({
                username: contributorsArray[i].author.login ,
                numberOfCommits: contributorsArray[i].total,
                profilePicUrl:contributorsArray[i].author.avatar_url
            });

            //only if i is less than 3 , the topThreeArray is populated (To make the top three array)
            if(i < 3){
                //adding the newContributor object to the top three array
                topThreeArray[i] = newContributor;  
            }

            //adding all Contributor in decending order total commits to populate the leaderboard array
            fullLeaderboardArray[i]=newContributor;  
        }

        //creating a new Leaderboard object
        let newLeaderboard= new Leaderboard({
            organizationName:organizationName,
            repoName: repoName,
            topThree: topThreeArray,
            allContributors: fullLeaderboardArray
        });

        //passing the newLeaderboard object to the callback function
        callback(newLeaderboard);
    } );
}

