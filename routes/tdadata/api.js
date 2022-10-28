const https = require("axios");
const config = require('../../config')
const tdaDataHost = config.apiHost.tdaData

class Options {
    static options(query) {
        return https.post(`${tdaDataHost}/tda/options`, {"query":query}).then((data)=>{return data.data});
    }
}

module.exports = {
    Options
}