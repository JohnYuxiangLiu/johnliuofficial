const axios = require('axios');





const applicationId = `6100d5c19ca930001fc0d7e6`
const resourceUrl = `https://api.knack.com/v1/applications/${applicationId}`
const resourceUrl1 = `https://api.knack.com/v1/applications/${applicationId}/test/schema/list/objects/`



// axios.get(resourceUrl, {
//     params:
//     {
//         name: 'test'
//     }
// })
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });



async function getUser() {
    try {
      const response = await axios.get(resourceUrl1);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();