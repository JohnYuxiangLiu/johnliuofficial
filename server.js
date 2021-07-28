
const axios = require('axios');

var knack = require('knackhq-client');


knack.authenticate({ apikey: '404161f6-ff01-482b-9054-d32e3e2c1b35', appid: '6100d5c19ca930001fc0d7e6' }, function(error) {
    if (error) {
      // failed to log in!
    }else{
        console.log("success");
    }
  });


  const applicationId = `6100d5c19ca930001fc0d7e6`
  const resourceUrl = `https://api.knack.com/v1/applications/${applicationId}`
  const resourceUrl1 = `https://builder.knack.com/johnliuofficial/test/schema/list/objects/`

  async function getUser() {
    try {
      const response = await axios.get(resourceUrl1);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();