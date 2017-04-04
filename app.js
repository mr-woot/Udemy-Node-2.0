const yargs = require("yargs");
const rp = require("./requestWrapper");
const geocode = require("./geocode");

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
                .alias("help", "h")
                .argv;

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if (errorMsg) {
        console.log(errorMsg);
    } else {
        console.log(results);
    }
});