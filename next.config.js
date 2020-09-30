const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(withSass({
    env: {
        SNACKABLE_API_URL: 'http://interview-api.snackable.ai/api'
    }
}));
