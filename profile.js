

function geturl(username){
    var userUrl = "https://teamtreehouse.com/" + username + ".json";
    return userUrl
};

var https = require("https");


function printMessage(username,badgeCount, points){
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in javaScript" ;
    console.log(message);
};

//Print out error message
function printError(error){
    console.error(error.message);
};


function get(username){
     //connect to API URL (http://teamtreehouse.com/username.json)
        var request = https.get(geturl(username), function(response){
        var body = "";

    //read the data 
    response.on('data',function(chunk){
        body += chunk;        
    });
    response.on('end', function(){
        if(response.statusCode == 200){
        try{
            //parse the data
            var profile = JSON.parse(body);
            //print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript)
            
        } catch(error){
            //parse error
            printError(error.message);
        }
        } else {
            printError({message: "there was an error getting the profile for " + username});
        }
    });


    
    

    });

    //connection Error
    request.on("error",printError);



};

module.exports.get = get;