var http = require("http");

function getDest(myCity){
    //var mycity = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "," + ccode;
    var thisCity = "http://api.openweathermap.org/data/2.5/weather?q=" + myCity+"&APPID={c26760b84f67f1c5b5fa56373c1f458b}";
    console.log(thisCity);
    return thisCity;
}

function get(myCity){
    var request = http.get(getDest(myCity),function(response){

        var body = "";

    response.on('data', function(chunk){
        body += chunk;
    });

    response.on('end', function(){
        //if(response.statusCode == 200){
        //    try{
                //parse the data
                var city = JSON.parse(body);
                console.log(city);
         //   }catch (error){
             //   console.log(error.message);
          //  }
       // };
    });

    response.on('error',function(e){
        console.log("there was an error");
    });

    });

};

module.exports.get = get;