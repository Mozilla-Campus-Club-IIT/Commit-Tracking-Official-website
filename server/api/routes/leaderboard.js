const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: "Handling GET request for /leaderboard",
        leaderboard:
            [
                {
                    username: "Ravindu",
                    numcommits: 21,
                    profilepicurl: "https://avatars1.githubusercontent.com/u/17488349?v=4"
                },
                {
                    username: "obhasha",
                    numcommits: 13,
                    profilepicurl: "https://avatars3.githubusercontent.com/u/15901703?v=4"
                },
                {
                    username: "wdevon99",
                    numcommits: 8,
                    profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
                },
                {
                    username: "KushelR",
                    numcommits: 7,
                    profilepicurl: "https://avatars1.githubusercontent.com/u/31211834?v=4"
                },
                {
                    username: "Himanshu-Mishr",
                    numcommits: 3,
                    profilepicurl: "https://avatars1.githubusercontent.com/u/1938285?v=4"
                }
            ]
    });
});


module.exports = router;