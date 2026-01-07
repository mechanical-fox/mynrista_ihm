

class API_Util {

    static BASE_URL = "http:/127.0.0.1:8080";

    /** A function able to send a POST call. 
    * It will be necessary to use await, to retrieve the result.
    *   
    * @param {string} url Url of the request
    * @param {object} body A body such as undefined or {name: 'Itsuki', email : 'itsuki@yahoo.fr'}
    * @returns {Promise<API_Response>} The response of the API. It will be necessary to use the keyword await. 
    * */
    static async post(url, body){
        let headers = {};

        if (body) 
            headers['Content-Type'] = 'application/json';

        return API_Util.request<T, V>(url, 'POST', headers, body);
    }


    /** A function able to send a GET call. 
    * It will be necessary to use await, to retrieve the result.
    *   
    * @param {string} url Url of the request
    * @returns {Promise<API_Response>} The response of the API. It will be necessary to use the keyword await. 
    * */
    static async get(url) {
        return API_Util.request<undefined, V>(url, 'GET', {}, undefined);
    }


    /** This function perform a  request to a url, and return the response of the request. It will be necessary to 
    * use await, to retrieve the result.In the case of a error, the message stored in the API_Response is volontary
    * fuzzy, to allow to display the message to the client in the browser, if needed.
    * 
    * @param {string} url Url of the request
    * @param {string} method A method such as 'GET', 'POST'
    * @param {Record<string, string>} headers Headers such as {'Content-Type' : 'application/json'}
    * @param {object} body A body such as undefined or {name: 'Itsuki', email : 'itsuki@yahoo.fr'}
    * @returns {Promise<API_Response>} The response of the API. It will be necessary to use the keyword await. 
    * */
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
        } catch {
            return new API_Response(newUrl, undefined, true, 'Serveur éteint ou non disponible', null, null);
        }

        if (response) {
            const textData = await response.text();
            const status = response.status;
            let hasFailed  = response && response.ok ? false : true;
            let errorMessage  = null;
            let data = null;

            if (!hasFailed && textData) {
                try {
                    data = JSON.parse(textData);
                } catch {
                    data = textData;
                }
            } else if (hasFailed && status) {
                errorMessage = `Reception d'un code ${status}`;
            } else if (hasFailed && !status) {
                errorMessage = `Serveur éteint ou non disponible`;
            }

            return new API_Response<V>(newUrl, status, hasFailed, errorMessage, textData, data);
        }

        return new API_Response<V>(newUrl, undefined, true, 'Serveur éteint ou non disponible', null, null);
    }
}
