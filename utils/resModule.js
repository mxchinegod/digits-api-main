class BaseModel {
    /**
     * If the data is a string, then the message is set to the data and the data is set to null
     * @param data - The data that you want to pass to the client.
     * @param message - The error message
     */
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    /**
     * A constructor function that creates a new object.
     * @param data - The data returned by the interface
     * @param message - The message to be returned to the front end
     */
    constructor(data, message) {
        super(data, message)
        this.errno = 0
        this.code = 200
        this.type = "success"
    }
}

class ErrorModel extends BaseModel {
    /**
     * A constructor function that takes in three parameters and sets the errno, type, and code
     * properties of the object.
     * @param data - The data returned by the server.
     * @param message - The error message
     * @param code - The HTTP status code, such as 200, 404, 500, etc.
     */
    constructor(data, message, code) {
        super(data, message)
        this.errno = -1
        this.type = "error"
        this.code = code
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}