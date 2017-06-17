module.exports = {
    routeSurvey: (app, path) => {
        app.get("/survey", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
    },

    routeHome: (app, path) => {
        app.use(function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    }
};