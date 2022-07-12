const request = require("request");



module.exports.geoAddress = (result,cb) => {
     
    let address = encodeURIComponent(result);
    request(`http://www.mapquestapi.com/geocoding/v1/address?key=AO8zIQYsHaxru5XAsREkweQ8WvUqlIm3&location=${address}`,(err,res,body) => {
   
        let data = JSON.parse(body);
        let lat = data.results[0].locations[0].latLng.lat;
        let lng = data.results[0].locations[0].latLng.lng;
        let street = data.results[0].locations[0].street;
        let zip = data.results[0].locations[0].postalCode;


        if(data.results[0].locations[0].street === ""){
            cb("TypeError error no result found for the api search");
        }else{
            cb(undefined,{
                lat,lng
                ,street,
                zip
            });
        }

  
    });
}

