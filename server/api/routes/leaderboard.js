const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: "Handling GET request for /leaderboard",
        leaderboard:
            [
                {
                    username: "wdevon99",
                    numcommits: 300,
                    profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
                },
                {
                    username: "john98",
                    numcommits: 200,
                    profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
                },
                {
                    username: "xTechBro",
                    numcommits: 100,
                    profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
                },
                {
                    username: "techStars101",
                    numcommits: 50,
                    profilepicurl: "https://avatars2.githubusercontent.com/u/28486947?v=4"
                }
            ]
    });
});


module.exports = router;