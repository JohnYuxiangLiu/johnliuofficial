const axios = require('axios');






// axios.get('https://api.coingecko.com/api/v3/ping')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

const applicationId = `6100d5c19ca930001fc0d7e6`
const resourceUrl = `https://api.knack.com/v1/applications/${applicationId}`

// ~server/api/application.js
// your-router-function-here ...

axios.get(resourceUrl)
.then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });