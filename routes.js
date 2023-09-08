const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const { slack_name, track } = req.query;
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const githubRepoUrl = 'https://github.com/seung-waedet/HNG-Stage-1';
    const githubFileUrl = `${githubRepoUrl}/blob/main/path/to/your/file.js`;

    res.status(200).json(
        {
            "slack_name": slack_name,
            "current_day": currentDay,
            "utc_time": currentDate,
            "track": track,
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": githubRepoUrl,
            "status_code": 200
        }
    )
})

module.exports = router;