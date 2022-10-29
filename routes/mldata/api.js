const https = require("axios");
const config = require('../../config')
const mlDataHost = config.apiHost.mlData

class SummarizeAPI {
    static bart_cnn(query) {
        return https.post(`${mlDataHost}/bart_cnn`, {"query":query}).then((data)=>{return data.data});
    }
}

module.exports = {
    SummarizeAPI
}