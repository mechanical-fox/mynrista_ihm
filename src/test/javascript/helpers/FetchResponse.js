

export class FetchResponse {

    status;
    ok;
    data;

    constructor(status, data) {
        this.status = status;

        if (this.status && this.status >= 0 && this.status <= 400) 
            this.ok = true;
        else 
            this.ok = false;

        this.data = data;
    }

    /** Return the text returned by the API. It will be necessary to use the keyword await to retrieve 
     * the result. */
    async text(){
        return this.data;
    }
}