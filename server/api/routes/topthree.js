const express = require('express');
const router = express.Router();
const axios = require('axios');

var topthree =
{
    first: {
        name: "Ravindu",
        numcommits: 21,
        profilepicurl: "https://avatars1.githubusercontent.com/u/17488349?v=4"
        
    },
    second: {
        name: "obhasha",
        numcommits: 13,
        profilepicurl: "https://avatars3.githubusercontent.com/u/15901703?v=4"
    },
    third: {
        name: "wdevon99",
        numcommits: 8,
        profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
    }
}


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request for /Top 3",
        topthree: topthree
    }); 
});


//===================================================

async function onGetRequestToGitHubApi() { 

    let promise=await axios.get('https://api.github.com/repos/Mozilla-Campus-Club-IIT/Mozilla-Campus-Club-IIT.github.io/stats/contributors')
    .then(response => {  
       
        console.log("Username :"+response.data[5].author.login);
        console.log("PP Url :"+response.data[5].author.avatar_url);
        console.log("Commits :"+response.data[5].total);

        return response.data[5].total;

    })
    .catch(error => {
        console.log(error);
    });
 
}

async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}


var res=onGetRequestToGitHubApi();


module.exports = router;