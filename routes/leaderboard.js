//loading express module
const express= require('express');
//initializing express Router to handdle the routes
const router= express.Router();

//requiring the leaderboard and controbutor models to be able to make new objects
const Leaderboard =require("../models/leaderboard");
const Contributor =require("../models/contributor");

//=========  /leaderboard ROUTE  ========= 
router.post("/" , (req,res)=>{
    //getting the github organization name and repo name from the request body
    const GITHUB_ORAGANIZATION_NAME=req.body.organizationName;
    const GITHUB_REPO_NAME=req.body.repoName;

    //calling the getFullLeaderboard to send a response to the client which contains the leaderboard
    Leaderboard.getFullLeaderboard( GITHUB_ORAGANIZATION_NAME , GITHUB_REPO_NAME , (leaderboard)=>{
        res.json({
            status:true,
            message:"Leaderboard retrived successfully",
            leaderboard : leaderboard 
        });
    } );
   
});


//exporting the router to be able to use it in the app.js or any other file
module.exports= router;