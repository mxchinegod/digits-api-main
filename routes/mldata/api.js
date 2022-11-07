const https = require("axios");
const config = require('../../config')
const mlDataHost = config.apiHost.mlData

class SummarizeAPI {
    /**
     * It takes a query, sends it to the ML server, and returns the response
     * @param query - The query you want to run.
     * @returns The data is being returned as a promise.
     */
    static bart_cnn(query) {
        return https.post(`${mlDataHost}/bart_cnn`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

class AutoDDAPI {
    static autodd() {
        return https.post(`${mlDataHost}/autodd`).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

class GreeksAPI {
    static greeks(query) {
        return https.post(`${mlDataHost}/greeks`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

module.exports = {
    SummarizeAPI
    , AutoDDAPI
    , GreeksAPI
}