const axios = require("axios");

module.exports.getWeather = (street,lat,lng,cb) => {
  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: `Abuja,ng`,
      lat: `${lat}`,
      lon: `${lng}`,
      id: '2172797',
      lang: 'null',
      units: 'imperial',
    },
    headers: {
      'X-RapidAPI-Key': 'be44ad1d09msh0bc0204b00e77fcp1fe131jsn14f27f5dd2f4',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };
  

  axios.request(options).then(function (response) {
     if(response.status === 200){
      let result = response.data;
      cb(undefined,{
        temperature: result.main.temp,
        pressure: result.main.pressure,
        humidity: result.main.humidity,
      })
     }else{
      console.log("error found when in making the request");
     }
  }).catch(function (error) {
    console.error(error);
  });
}

