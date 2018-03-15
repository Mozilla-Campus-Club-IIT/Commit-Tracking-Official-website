const express = require('express');
const router = express.Router();
const axios = require('axios');

var topthree =
{
    first: {
        name: "wdevon99",
        numcommits: 300,
        profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
    },
    second: {
        name: "john98",
        numcommits: 120,
        profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
    },
    third: {
        name: "xTechBro",
        numcommits: 100,
        profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
    }
}

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request for /Top 3",
        topthree: topthree
    }); 
    console.log(response);
});

//===================================================

function onGetRequestToGitHubApi() {
    axios.get('https://api.github.com/repos/Mozilla-Campus-Club-IIT/Mozilla-Campus-Club-IIT.github.io/stats/contributors')
    .then(response => {     
       // console.log(response.data[1].author.login);
        return response.data[1].author.login;
    })
    .catch(error => {
        console.log(error);
    });
}
    

module.exports = router;