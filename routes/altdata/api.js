const https = require("axios");
const config = require('../../config')
const altDataHost = config.apiHost.altData

class DarkPool {
    static spCompare() {
        return https.get(`${altDataHost}/darkpool/spCompare`).then((data)=>{return data.data});
    }
}

class NewsAPI {
    static everything(query) {
        return https.post(`${altDataHost}/news/everything`, {"query":query}).then((data)=>{return data.data});
    }
}

module.exports = {
    DarkPool
    , NewsAPI
}