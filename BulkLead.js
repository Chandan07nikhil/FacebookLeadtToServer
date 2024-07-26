
'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Ad = bizSdk.Ad;
const Lead = bizSdk.Lead;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '1023577551990803';
const id = '<AD_GROUP_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info. 
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
};
const leadss = (new Ad(id)).getLeads(
  fields,
  params
);
logApiCallResult('leadss api call complete.', leadss); 


for(let i = 0; i < 5; i++){
    console.log('Lead Data', leadss);
}
