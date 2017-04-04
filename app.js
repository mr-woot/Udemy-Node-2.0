const request = require('request');
const yargs = require('yargs');

const argv = yargs
                .options({
                    a: {
                        describe: 'Address or location to fetch',
                        demand: true,
                        alias: 'address',
                        string: true
                    }
                })
                .help()
                .argv;

let address = argv["a"];

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&`,
    json: true
}, (err, res, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});