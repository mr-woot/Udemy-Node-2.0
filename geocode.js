const rp = require("./requestWrapper");
const json = require("prettyjson");
 
module.exports = {
    geocodeAddress: (address, callback) => {
        let encodedAddress = encodeURIComponent(address);
        let uri = "https://maps.googleapis.com/maps/api/geocode/json";
        let queryParams = {
            address: encodedAddress
        };

        rp.makeRequest({}, uri, queryParams, "GET")
            .then(response => {
                if (response.body.status === "ZERO_RESULTS") {
                    callback("NOT FOUND");
                } else if (response.body.status === "OK") {
                    callback(undefined, json.render(response.body.results[0]));
                }
            })
            .catch(err => {
                callback(err.error.error_message);
            });
    }
};