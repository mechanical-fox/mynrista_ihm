import fs from 'fs';

import {FetchResponse} from './FetchResponse';
import {Helper} from './Helper';

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

        let bodyParsed = null;
        let urlMatched = false;

        if (options.body){
            FetchMock.lastBodyCalled = options.body;

            try{
                bodyParsed = JSON.parse(options.body);
            }
            catch(err){
                let msg = `\n\n FetchMock can't parse the body for the method ${options.method} url ${url},`;
                msg += `because the body isn't in json\n\n Body: ${options.body}`;
                console.warn(msg);
                throw new Error(msg);
            }

        }
        else 
            FetchMock.lastBodyCalled = null;

        for (let mock of FetchMock.mocks) {

            if (url.endsWith(mock.url) && mock.method == options.method){
                urlMatched = true;

                if(!mock.body || Helper.match(bodyParsed, mock.body)){
                    const answer = new FetchResponse(mock.status, JSON.stringify(mock.data));
                    return answer;
                }
            }
        }

        if(!urlMatched){
            console.warn(`\n\nThere is no FetchMock for the method ${options.method} url ${url}\n\n`);
            throw new Error(`There is no FetchMock for the method ${options.method} url ${url}`);
        }
        else{
            let msg = `\n\nThere is a FetchMock for the method ${options.method} url ${url}. But the \n`;
            msg += `body sended by the request doesn't match any of the bodies allowed in the mock.\n\n`;
            msg += `Body: ${options.body}`;
            console.warn(msg);
            throw new Error(msg); 
        }

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