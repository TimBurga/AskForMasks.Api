const fs = require('fs');
const _ = require('lodash');

let doc = JSON.parse(fs.readFileSync('c:\\temp\\allproviders.json'));

//console.log(doc);

//findAllContent(doc);

var allTables = [];
var allRows = [];
var zips = {};
var cities = {};

loadZips();

String.prototype.trim = function() {
    return _.trim(this, ", ");
}

// parseAddress("901 Olive Dr Bakersfield, CA 93308");
// return ;

function parseAddress(address) {
    address = address.replace(/  /gi, "")
    var original = address;
    var zipRegex = "\\d\\d\\d\\d\\d";
    var addressLine1 = null;
    var state = null;
    var city = _.keys(cities).find(cityAndState => address.includes(cityAndState));

    if (city) {
        address = address.replace(city, "");
        state = cities[city][0].state;
        city = cities[city][0].city;
    }

    var zipCode = getMatch(address, zipRegex);
    if (zipCode) address = address.replace(zipCode, "").trim();
    
    if (!state) {
        var stateRegex = /^.*([A-Z][A-Z])$/g;
        var match = stateRegex.exec(address);
        state = match && match[1];
    }

    address = address.replace(state, "").trim();

    var pos = address.indexOf(",");
    if (pos > 0) {
        addressLine1 = address.substr(0, pos).trim();
        address = address.substr(pos).trim();
    } else {
        addressLine1 = address;
        // //TODO go thru all cities of that state and match against the string. If found - replace
        // var city = _.keys(cities).find(city => {
        //     return original.includes(city);
        // });
        // } else {
        //     var cityRegex = /^.*\b([A-Z]+)$/gi;
        //     match = cityRegex.exec(address);
        //     city = match && match[1];
        //     if (city) address.replace(city, "");
        // }
    }

    if (!city) {
        address = address.trim();
        city = address.replace(/,/gi, "").trim();
    }

    if (!zipCode && cities[city + ", " + state]) {
        zipCode = cities[city + ", " + state][0].zipCode || null;
    }

    if (!zipCode && cities[city + " " + state]) {
        zipCode = cities[city + " " + state][0].zipCode || null;
    }

    // next - ....

    return {
        addressLine1,
        city,
        zipCode,
        state,
        original: original
    }
}

findAllTables(doc);

allTables.forEach(t => {
    t.tableRows.forEach(row => {
        var row1 = row.tableCells.map(c => {
           contentText = "";
           contentLinks = [];
           findAllContent(c);
           contentText = contentText.replace(/\n/gi, "");
           if (contentLinks.length > 0) {
                contentText += contentLinks.join(", ");
           }
           return contentText; 
        });
        var rowText = row1.join(" ").trim();
        if (rowText.length == 0 || rowText.includes("Facility Name")) return;
        allRows.push(row1);
    });
});

function getMatch(str, regex) {
    var match = new RegExp("(" + regex + ")", "gi").exec(str.trim());
    if (match) {
         return _.last(match) || null;
    } else {
        return null;
    }
}

var result = allRows.map(row => {
    row.forEach((c, i) => {
        row[i] = row[i].trim();
        if (row[i].toLowerCase() == "none") row[i] = null;
    });

    rowText = row.join(" ");

    var phoneRegex1 = "\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d";
    var phoneRegex2 = "\\(\\d\\d\\d\\) \\d\\d\\d-\\d\\d\\d\\d";
    var emailRegex = "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}";
    
    var organization = parseAddress(row[1]);
    organization.name = row[0];
    organization.specialInstructions = _.compact([row[3], row[4], row[5], row[2]]).join(". ");
    organization.phone = getMatch(rowText, phoneRegex1) || getMatch(rowText, phoneRegex2);
    organization.email = getMatch(rowText, emailRegex);

    return {
        organization,
        submitter: {
            firstName: null,
            lastName: null,
            email: "we.need.handmade.masks@gmail.com",
            phone: null
        }
    }
})

result = result.filter(r => r.organization.zipCode);

//result = [result[0]];

fs.writeFileSync("result.json", JSON.stringify(result, null, ' '));

console.log(result.length);

function findAllTables(node) {
    if (_.isArray(node)) {
        node.forEach(n => findAllTables(n));
    } else if (_.isObject(node)) {
        if (!_.isUndefined(node.table)) {
            allTables.push(node.table);
        } else {
            _.keys(node).forEach(n => findAllTables(node[n]));
        }
    }
}

var contentText = "";
var contentLinks = [];

function findAllContent(node) {
    if (_.isArray(node)) {
        node.forEach(n => {
            findAllContent(n);
        })
    } else if (_.isObject(node)) {
        if (_.isString(node.content)) {
            contentText = contentText + " " + node.content; 
            if (node.textStyle && node.textStyle.link) {
                contentLinks.push(node.textStyle.link.url);
            }
        } else {
            _.keys(node).forEach(n => {
                findAllContent(node[n]);
            });
        }
    }
}

function loadZips() {
    var lines = fs.readFileSync("zipcodes.csv", "utf-8").split("\n");
    lines.forEach(l => {
        var tokens = l.trim().split(",");
        if (tokens.length != 3) return;
        var zip = tokens[0].padStart(5, "0");
        zips[zip] = zips[zip] || [];
        zips[zip].push({ city: tokens[1], state: tokens[2]});
        var cityStateObj = {
            city: tokens[1],
            state: tokens[2],
            zipCode: zip
        };
        var cityState = tokens[1] + ", " + tokens[2]; 
        cities[cityState] = cities[cityState] || [];
        cities[cityState].push(cityStateObj);
        cityState = tokens[1] + " " + tokens[2]; 
        cities[cityState] = cities[cityState] || [];
        cities[cityState].push(cityStateObj);
    });

}