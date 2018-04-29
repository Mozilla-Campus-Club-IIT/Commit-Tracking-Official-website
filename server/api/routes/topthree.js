//adding the imports
const express = require('express');
const router = express.Router();
const axios = require('axios');

const GITHUB_ORAGANIZATION_NAME='Mozilla-Campus-Club-IIT';
const GITHUB_REPO_NAME='Hello-World-Collection';


//the  GET route for /topthree
router.get('/', (req, res, next) => {
    //calling the onGetDataFromGithub method 
    onGetDataFromGithub(GITHUB_ORAGANIZATION_NAME , GITHUB_REPO_NAME , onGetDataFromGithubCallback);
    //Setting a small time out to give time for onGetDataFromGithub() fuction to complete
    setTimeout(() => {
        //Sending the response
        res.status(200).json({
            message: "Handling GET request for /Top 3",
            organizationName: GITHUB_ORAGANIZATION_NAME,
            repoName:GITHUB_REPO_NAME,
            topthree: topthree
        }); 
    }, 2000); // 2 seconds Time out 
});


//creating a temp varaible to store the top three : FOR TESTING
let topthree =
{
    first: {
        name: "-",
        numcommits: 0,
        profilepicurl: "-"
        
    },
    second: {
        name: "-",
        numcommits: 0,
        profilepicurl: "-"
    },
    third: {
        name: "-",
        numcommits: 0,
        profilepicurl: "-"
    }
}


/**
 * The fuction that call the github api to get the JSON object which has information about all the contributors 
 * @param {*} organizationName : Name of the github organization 
 * @param {*} repoName : Name of the github repo 
 * @param {*} callback : The call back function
 */
async function onGetDataFromGithub(organizationName,repoName,callback) { 
    //creating the github api URL by concatanating the organizationName and repoName
    let url='https://api.github.com/repos/'+organizationName+'/'+repoName+'/stats/contributors';
    //executing the GET request
    let promise=await axios.get(url)
    .then(response => {  
        //calling the call back fuction and passing the result of the resloved promise - which is a  JSON object which has information about all the contributors 
        callback(response);
    })
    .catch(error => {
        //if and errors - it is logged
        console.log(error);
    });
}

//Defining the  onGetDataFromGithub Callback function
let onGetDataFromGithubCallback = function(githubJsonObject){
    updateTopThree(githubJsonObject);
}

/**
 * The fuction that updates the 'topThree' Json object
 * @param {*} githubJsonObject : The object returned from the github Api
 */
function updateTopThree(githubJsonObject){
    //getting the users array from the githubJsonObject varaible
    let usersArray =githubJsonObject.data;

    //sorting the array of users based on the total commits
    usersArray.sort(function(userCurrent, userNext){return userNext.total-userCurrent.total});

    //updating first place
    topthree.first.name=usersArray[0].author.login;
    topthree.first.numcommits=usersArray[0].total;
    topthree.first.profilepicurl=usersArray[0].author.avatar_url;
    //updating second place
    topthree.second.name=usersArray[1].author.login;
    topthree.second.numcommits=usersArray[1].total;
    topthree.second.profilepicurl=usersArray[1].author.avatar_url;
    //updating third place
    topthree.third.name=usersArray[2].author.login;
    topthree.third.numcommits=usersArray[2].total;
    topthree.third.profilepicurl=usersArray[2].author.avatar_url;

}

module.exports = router;




// console.log("Username :"+response.data[5].author.login);
// console.log("PP Url :"+response.data[5].author.avatar_url);
// console.log("Commits :"+response.data[5].total);

// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
// }

//let url='https://api.github.com/repos/Mozilla-Campus-Club-IIT/Mozilla-Campus-Club-IIT.github.io/stats/contributors';


// let value="Hello";
// onGetRequestToGitHubApi();
// setTimeout(() => {
//     console.log(value);
// }, 2000);
