let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 3000;
let htmlRoutes = require("./app/routing/htmlRoutes.js");
let apiRoutes = require("./app/routing/apiRoutes.js");
let friends = require("./app/data/friends.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

apiRoutes.getFriends(app, friends);
apiRoutes.postFriend(app, friends);
htmlRoutes.routeSurvey(app, path);
htmlRoutes.routeHome(app, path);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});