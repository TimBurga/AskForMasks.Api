const fs = require('fs');
const _ = require('lodash');
const request = require('request');
const requestPromise = require('request-promise');

if (process.argv[2] != "go") return;

var data = JSON.parse(fs.readFileSync("result.json"));

createNewRequests(data);

async function createNewRequests(data) {
    //data = [data[0]];
    for(var i=0; i < data.length; i++) {
        console.log(data[i]);
        await requestPromise({
            method: 'POST',
            uri: 'https://askformasks.azurewebsites.net/api/request',
            body: data[i],
            json: true 
        });
    };
}