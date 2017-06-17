        module.exports = {

            getFriends: (app, friends) => {
                app.get("/api/friends", function (req, res) {
                    res.json(friends);
                });
            },

            postFriend: (app, friends) => {
                let lowestDifference = 100;
                let totalDifference = 0;
                let currentMatch;
                app.post("/survey", function (req, res) {
                    
                    for(i = 0; i < friends.length; i++){
                        for(k = 0; k < friends[i].scores.length; k++){
                            totalDifference += Math.abs(req.body.scores[k] - friends[i].scores[k]);
                        }
                        if(totalDifference < lowestDifference){
                            lowestDifference = totalDifference;
                            currentMatch = friends[i];
                        }
                        totalDifference = 0;
                    }
                    
                    res.json(currentMatch);
                    lowestDifference = 100;            
                    friends.push(req.body);
                    res.end();
                });
            }
        };