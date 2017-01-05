//Problem: We need a simple way to look at a users badge count and javascript points
//Solution use nodejs to connect to Treehouse API to get profile information to print out
    var profile = require('./profile.js'); 
    var prompt = require("prompt");
    prompt.start();
    prompt.get(['username'], function (err, result){
        if(err) {
            return onErr(err)
        }
 
     
     
     var username = result.username;
     profile.get("username");
    
    });
   
    
   function onErr(err) {
    console.log(err);
    return 1;
  }
        


