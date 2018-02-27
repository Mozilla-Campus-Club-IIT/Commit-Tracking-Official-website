const express = require('express');
const router = express.Router();

var topthree =
    {
        first: {
            name: "wdevon99",
            numcommits: 300,
            profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"

        },
        second: {
            name: "john98",
            numcommits: 200,
            profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"

        },
        third: {
            name: "xTechBro",
            numcommits: 100,
            profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
        }
    }



function onGetRequestToGitHubApi() {
    
   
    // fetch("", {method:"GET",bo}).then(data => data.json()).then(resulult => {


    // }).catch(err=>{

    // })
}



router.get('/', (req, res, next) => {

   // onGetRequestToGitHubApi();

    res.status(200).json({
        message: "Handling GET request for /Top 3",
        topthree: topthree
    });
});


module.exports = router;