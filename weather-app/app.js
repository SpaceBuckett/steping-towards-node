const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=507911120bed9261a377e7cbbadf95ea&query=34.0151,71.5249';

request({ url: url }, (error, response) => {
    // console.log(response);
    const data = JSON.parse(response.body);
    console.log(data.current);
})  