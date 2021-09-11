// generate access token with the help of refresh token
//also access token expires in 6 hours 
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({})
return hubspotClient.oauth.defaultApi
.createToken('refresh_token', undefined, undefined, "a0ad2df9-cc8c-4742-8502-10d3c0b4362d", "5b4d7c6b-0040-4de6-a397-16d99f4cf01d","eu1-1725-dbc0-4a20-99e4-57e4ac079a29")
.then((results) => {
    console.log(results.body)

    // this assigns the accessToken to the client, so your client is ready
    // to use
    hubspotClient.setAccessToken(results.body.accessToken)

    return hubspotClient.crm.companies.basicApi.getPage()
})



//getting all contacts of a user

var request = require('request');
var headers = {
    'Authorization': 'Bearer CJfbk5C9LxICHwEYxYH4CyCknrsMKPvvGDIUQgOG97Z-aqeLFfWac92HZhzF9pk6LAB_A8H_BwyAAwDI_4B_ec4oAAAAIAAY4DQTABgcAADAwx8GAQAAAIAnAADgQhR4WbHgtJqOZFBCG8nlNtTQONlegUoDZXUxUgBaAA'
};

var options = {
    url: 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all?property=phone&property=firstname&property=lastname&property=email',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        
       body=JSON.parse(body);
       //get the number of total contact of a user
       console.log(body.contacts.length)

       let length=body.contacts.length

       for(i=0;i<length;i++){
        console.log(body.contacts[i].properties.firstname.value);
        console.log(body.contacts[i].properties.lastname.value);
        console.log(body.contacts[i].properties.email.value);
        console.log(body.contacts[i].properties.phone.value);
        console.log();

       }
    
       
    }
}

request(options, callback);



// getting all companies of a user

var request = require('request');
var headers = {
    'Authorization': 'Bearer CP-6sJS9LxICHwEYxYH4CyCknrsMKPvvGDIUE1zKUT6WoaOJAzCWFv4KgQJYEik6LAB_A8H_BwyAAwDI_4B_ec4oAAAAIAAY4DQTABgcAADAwx8GAQAAAIAnAADgQhRLlbhXYPRkgRl9JAEaroDRgQwenEoDZXUxUgBaAA'
};

var options = {
    url: 'https://api.hubapi.com/companies/v2/companies/paged?properties=name&properties=website',
    headers: headers
};


function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        
       body=JSON.parse(body);
       //get the number of total companies of a user
       console.log(body.companies.length)

       let length=body.companies.length

       for(i=0;i<length;i++){
        console.log(body.companies[i].properties.name.value);
        console.log(body.companies[i].properties.website.value);
       
        console.log();

       }
    
       
    }
}

request(options, callback);



// getting all deals of a user


var request = require('request');
var headers = {
    'Authorization': 'Bearer CLiZyZa9LxIDHwEBGMWB-AsgpJ67DCj77xgyFKVRnRVXsX00wtfMbMgjeGCjk32DOiwAfwPB_wcMgMMHyP-Af3nOKAAAACAAGOA0HwAYHAAAwMMfBgEAAACAJwAA4EIU2JydjXr0p-3FRhmQgp8Avbg0EzpKA2V1MVIAWgA'
};

var options = {
    url: 'https://api.hubapi.com/deals/v1/deal/paged?includeAssociations=true&properties=dealname&properties=amount&properties=closedate',
    headers: headers
};


function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        
       body=JSON.parse(body);
       //get the number of total deals of a user
       console.log(body.deals.length)

       let length=body.deals.length

       for(i=0;i<length;i++){
        console.log(body.deals[i].properties.dealname.value);
        console.log(body.deals[i].properties.amount.value);
        console.log(body.deals[i].properties.closedate.value);
       
        console.log();

       }
    
       
    }
}

request(options, callback);




// getting all tickets of a user

var request = require('request');
var headers = {
    'Authorization': 'Bearer CLiZyZa9LxIDHwEBGMWB-AsgpJ67DCj77xgyFKVRnRVXsX00wtfMbMgjeGCjk32DOiwAfwPB_wcMgMMHyP-Af3nOKAAAACAAGOA0HwAYHAAAwMMfBgEAAACAJwAA4EIU2JydjXr0p-3FRhmQgp8Avbg0EzpKA2V1MVIAWgA'
};

var options = {
    url: 'https://api.hubapi.com/crm-objects/v1/objects/tickets/paged?properties=subject&properties=content',
    headers: headers
};



function callback(error, response, body) {
   
    body=JSON.parse(body);
       //get the number of total tickets of a user
       console.log(body.objects.length)

       let length=body.objects.length

       for(i=0;i<length;i++){
        console.log(body.objects[i].properties.subject.value);
        console.log(body.objects[i].properties.content.value);
        console.log();

       }
    
       
    }


request(options, callback);