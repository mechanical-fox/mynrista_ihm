

class API_Response{

    url;
    status;
    hasFailed;
    errorMessage;
    textData;
    data;


    /** Construct an API Response, with the data given.
     * 
     * @param {string} url Url of the request
     * @param {number} status Status of the http request
     * @param {boolean} hasFailed true if the request has encountered an error
     * @param {string} errorMessage A message to explain an error, or null
     * @param {string} textData The data returned by the http request in format text
     * @param {object} data The data returned by the http request in the form of a object javascript 
     * */
    constructor(url, status, hasFailed, errorMessage, textData, data) {
        this.url = url;
        this.status = status;
        this.hasFailed = hasFailed;
        this.errorMessage = errorMessage;
        this.textData = textData;
        this.data = data;
    }
    
}
