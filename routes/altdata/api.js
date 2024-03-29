const https = require("axios");
const config = require('../../config')
const altDataHost = config.apiHost.altData

class DarkPool {
    /**
     * It returns the data from the darkpool/spCompare endpoint.
     * @returns The data is being returned as a promise.
     */
    static spCompare() {
        return https.get(`${altDataHost}/darkpool/spCompare`).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

class NewsAPI {
    /**
     * It returns a promise that will resolve to the data returned from the API call.
     * @param query - The search query.
     * @returns The data is being returned.
     */
    static everything(query) {
        return https.post(`${altDataHost}/news/everything`, {"query":query}).then((data)=>{return data.data});
    }
}

class ReserveAPI {
    /**
     * It returns a promise that will resolve to the data returned from the API call.
     * @returns The data is being returned.ß
     */
    static schedule() {
        return https.get(`${altDataHost}/reserve/schedule`).then((data)=>{return data.data});
    }
}

class LeaksAPI {
    /**
     * It returns a promise that will resolve to the data returned from the API call.
     * @returns The data is being returned.ß
     */
    static quarterly() {
        return https.get(`${altDataHost}/leaks/quarterly`).then((data)=>{return data.data});
    }
}

module.exports = {
    DarkPool
    , NewsAPI
    , ReserveAPI
    , LeaksAPI
}