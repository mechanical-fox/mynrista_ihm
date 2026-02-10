import fs from 'fs';

import {FetchResponse} from './FetchResponse';

export class FetchMock {

    static mocks = JSON.parse(fs.readFileSync('src/test/resources/urls.json').toString());

    static lastMethodCalled;
    static lastUrlCalled;
    static lastBodyCalled;

    /** This function will Mock fetch during the tests. It will be necessary to use the keyword await to retrieve 
     * the result. */
    static async fetch(url, options){

        FetchMock.lastMethodCalled = options.method;
        FetchMock.lastUrlCalled = url;

        if (options.body) 
            FetchMock.lastBodyCalled = options.body;
        else 
            FetchMock.lastBodyCalled = null;

        for (const mock of FetchMock.mocks) {

            if (url.endsWith(mock.url) && mock.method == options.method) {
                const answer = new FetchResponse(mock.status, JSON.stringify(mock.data));
                return answer;
            }
        }

        console.warn(`\n\nThere is no FetchMock for the method ${options.method} url ${url}\n\n`);
        throw new Error(`There is no FetchMock for the method ${options.method} url ${url}`);
    }


    /** Return the last url called, or null */
    static getLastUrlCalled() {
        return FetchMock.lastUrlCalled;
    }

    /** Return the last method called, or null */
    static getLastMethodCalled(){
        return FetchMock.lastMethodCalled;
    }

    /** Return the body given at the last url called, or null */
    static getLastBodyGiven(){
        return FetchMock.lastBodyCalled;
    }



}