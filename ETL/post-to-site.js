const fs = require('fs');
const _ = require('lodash');
const request = require('request');
const requestPromise = require('request-promise');

if (process.argv[2] != "go") return;

var data = JSON.parse(fs.readFileSync("result.json"));

createNewRequests(data);

async function createNewRequests(data) {
    while (data.length > 0) {
        var batch = _.take(data, 5);
        console.log("Sending ", batch);
        data = _.drop(data, 5);
        await requestPromise({
            method: 'POST',
            uri: 'https://askformasks.azurewebsites.net/api/request/bulk',
            body: { requests: batch },
            json: true 
        });
    }
}