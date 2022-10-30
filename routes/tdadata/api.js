const https = require("axios");
const config = require('../../config')
const tdaDataHost = config.apiHost.tdaData

class Options {
    /**
     * It returns the options data for a given query.
     * @param query - The query object that you want to send to the TDA API.
     * @returns An array of objects.
     */
    static options(query) {
        return https.post(`${tdaDataHost}/tda/options`, {"query":query}).then((data)=>{return data.data});
    }
}

class Volatility {
    /**
     * It returns the volatility of a stock.
     * @param query - The query you want to make.
     * @returns The volatility of the stock
     */
    static volatility(query) {
        return https.post(`${tdaDataHost}/tda/volatility`, {"query":query}).then((data)=>{return data.data});
    }
}

module.exports = {
    Options
    , Volatility
}