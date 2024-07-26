'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Lead = bizSdk.Lead;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '1023577551990803';
const id = '<LEAD_ID>';
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
const sample_code = (new Lead(id)).get(
  fields,
  params
);
logApiCallResult('sample_code api call complete.', sample_code);
