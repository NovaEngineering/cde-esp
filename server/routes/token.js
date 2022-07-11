
var express = require('express');
var router = express.Router();
////////////

router.get('/token', async function (req, res){
   
    const {Session}      = require('yandex-cloud');
    const {CloudService} = require('yandex-cloud/api/resourcemanager/v1');
    
    // Initialize SDK with your token
    const session = new Session({ oauthToken: OAuthToken });
    
    // Create service client
    const cloudService = new CloudService(session);
    
    // Issue request (returns Promise)
    let response = await cloudService.list({});
    console.log(response);

})
////////////
module.exports = router;