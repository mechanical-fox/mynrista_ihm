

class API_Util {

    static BASE_URL = "http:/127.0.0.1:8080";

    /** A function to send a POST call. It will be necessary to use await, to retrieve the result.
    * The response is returned under the form of a Promise<API_Response>. */
    static async post(url, body){
        let headers = {};

        if (body) 
            headers['Content-Type'] = 'application/json';

        return API_Util.request<T, V>(url, 'POST', headers, body);
    }


    /** A function to send a GET call. It will be necessary to use await, to retrieve the result.
    * The response is returned under the form of a Promise<API_Response>. */
    static async get(url) {
        return API_Util.request<undefined, V>(url, 'GET', {}, undefined);
    }


    /** This function performs a request to an url, and return the response of the request. It will be necessary to 
    * use await, to retrieve the result.In the case of a error, the message stored in the API_Response is volontary
    * fuzzy, to allow to display the message to the client in the browser, if needed.*/
    static async request(url, method, headers, body){
        const newUrl = API_Util.BASE_URL + url;

        const options = {
            method : method,
            headers: headers,
            body : body
        };
        
        let response = null;

        try {
            response = await fetch(newUrl, options);
        } 
        catch {
            return new API_Response(newUrl, undefined, true, EErrorCode.ERROR_CONNECTION, null, null);
        }

        if (response) {
            const textData = await response.text();
            const status = response.status;
            let hasFailed  = response && response.ok ? false : true;
            let errorCode  = null;
            let data = null;

            if (!hasFailed && textData) {
                try {
                    data = JSON.parse(textData);
                } 
                catch {
                    data = textData;
                }
            } 
            else if (hasFailed && status) 
                errorCode = EErrorCode.ERROR_STATUS_CODE;
            else if (hasFailed && !status) 
                errorCode = EErrorCode.ERROR_CONNECTION;

            return new API_Response(newUrl, status, hasFailed, errorCode, textData, data);
        }
        else
            return new API_Response(newUrl, undefined, true, EErrorCode.ERROR_CONNECTION, null, null);
    }
}
