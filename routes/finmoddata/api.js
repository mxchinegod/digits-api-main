const https = require("axios");
const config = require('../../config')
const tdaDataHost = config.apiHost.tdaData

class FinMod {
    /**
     * It returns the options data for a given query.
     * @param query - The query object that you want to send to the TDA API.
     * @returns An array of objects.
     */
    static historicalPrices(query) {
        return https.post(`${tdaDataHost}/finmod/historicalPrices`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
    static secFiling(query) {
        return https.post(`${tdaDataHost}/finmod/secFiling`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
    static financialGrowth(query) {
        return https.post(`${tdaDataHost}/finmod/financialGrowth`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
    static dcf(query) {
        return https.post(`${tdaDataHost}/finmod/dcf`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
    static erTranscript(query) {
        return https.post(`${tdaDataHost}/finmod/erTranscript`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
    static senateDisclosure(query) {
        return https.post(`${tdaDataHost}/finmod/senateDisclosure`, {"query":query}).then((data)=>{return data.data}).catch(e=>{return e});
    }
}

module.exports = {
    FinMod
}