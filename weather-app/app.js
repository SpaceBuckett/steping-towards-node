const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=507911120bed9261a377e7cbbadf95ea&query=34.0151,71.5249';

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Failed to connect to the weather service');
    } else if (response.body.error) {
        console.log('Failed to find the location')

    } else {
        console.log("It is currently " + response.body.current.temperature + " degress out. There are " + response.body.current.precip + "% chances of rain.");
    }
})


