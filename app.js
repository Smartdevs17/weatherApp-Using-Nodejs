const yargs = require("yargs");



const argv = yargs.options({
    a: {
        demand: true,
        string: true,
        alias: "address",
        describe: "Address to fetch data for"
    }
})
.help().alias("help","h")
.version().alias("version","v").argv;

// console.log(argv);
// console.log(decodeURIComponent(address));

const geoCode = require("./geocode/geocode");
const weather = require("./weather/weather");

geoCode.geoAddress(argv.address,(err,results) => {
    if(err){
        console.log(err);
    }else{
        // console.log(results);
        weather.getWeather(results.street,results.lat,results.lng,(err,weatherResult) => {
            if(err){
                console.log(err);
            }else{
                // console.log(weatherResult);
                console.log(`My current address is ${results.street}`);
                console.log(`The temperature degree hear is ${weatherResult.temperature} while the pressure is ${weatherResult.pressure} `)

            }
        })
    }
})

