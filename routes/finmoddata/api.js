const https = require("axios");
const config = require('../../config')
const tdaDataHost = config.apiHost.tdaData

class Historical {
    /**
     * It returns the options data for a given query.
     * @param query - The query object that you want to send to the TDA API.
     * @returns An array of objects.
     */
    static stock(query) {
        return https.post(`${tdaDataHost}/finmod/historical`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

module.exports = {
    Historical
}