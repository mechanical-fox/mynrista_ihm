

class API_Response{

    url;
    status;
    hasFailed;
    errorCode;
    textData;
    data;


    /** Construct an API Response, with the data given. The difference beetween textData and data, is
     * than textData will be by example a string representing a json code, and data will be the object
     * in javascript. Moreover, errorCode must be of the class EErrorCode or be null if there is no error. */
    constructor(url, status, hasFailed, errorCode, textData, data) {
        this.url = url;
        this.status = status;
        this.hasFailed = hasFailed;
        this.errorCode = errorCode;
        this.textData = textData;
        this.data = data;
    }
    
}
