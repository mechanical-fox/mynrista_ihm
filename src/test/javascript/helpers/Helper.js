

export class Helper{

    /** This function allow to sleep the number of milliseconds specified. But the function must be called with await 
    * to function correctly.*/
    static async sleep(duration_ms){
        return new Promise(resolve => setTimeout(resolve, duration_ms));
    }


    /** Return true if two objects are identical. The attributes are checked one by one, and this function works for 
     * objects containing others objects.*/
    static match(obj1, obj2){

        if(obj1 == obj2)
            return true;
        else if(obj1 == null || obj1 == undefined)
            return (obj2 == null || obj2 == undefined);
        else if(Object.keys(obj1).length != Object.keys(obj2).length)
            return false;

        for(let key of Object.keys(obj1)){

            if(obj1[key] instanceof Object){
                if(!(obj2[key] instanceof Object))
                    return false;
                if(!FetchMock.match(obj1[key], obj2[key]))
                    return false;
            }
            else if(obj1[key] != obj2[key])
                return false;
        }

        
        return true;
    }
    
}