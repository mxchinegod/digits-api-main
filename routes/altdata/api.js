const https = require("axios");
const config = require('../../config')
const altDataHost = config.apiHost.altData

class DarkPool {
    static spCompare() {
        return https.get(`${altDataHost}/darkpool/spCompare`);
    }
}

module.exports = {
    DarkPool
}