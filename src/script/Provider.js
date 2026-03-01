


/**
 *  This class provide some functions.
 *  Particulary it will be provide functions than must be mocked during the tests.
 *
 *  And this class allow to replace the functions provided by a mock during the tests.
 *  Actually, this class allow only to mock the fetch function. Because it's a critical function, during the unit test
 *  of an graphic interface.
 */
export class Provider {
    

    static mockForFetch = null;

    /** Perform the function fetch, like performed in the browser, or use a mock if a mock was declared.*/
    static async fetch(url, options){

        if (this.mockForFetch == null) 
            return fetch(url, options);

        return this.mockForFetch(url, options);
    }


    /** Replace the use of fetch, by the mock given. The mock given will have to take in first argument an url,
     * and in second arguments an object options, in the same format than accepted by fetch. */
    static mockFetch(mock){
        this.mockForFetch = mock;
    }

}