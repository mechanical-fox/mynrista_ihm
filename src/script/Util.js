
export class Util {


    static timers = new Map();

    /** Convert a date null or with format "JJ/MM/AAAA" to the format "YYYY-MM-DD". This function convert the dates of the format
     * used by the API, to the format used by the IHM. The format used by the IHM, is the format used by the inputs of type date. */
    static toDateFormatIHM(date){
        if(!date)
            return null;

        if(date.length != "JJ/MM/AAAA".length)
            throw new Error(`Date incorrectly formatted`);

        return date.substring(6,10) + "-" + date.substring(3,5) + "-" + date.substring(0,2);
    }

    /** Convert a date null or with format "YYYY-MM-DD" to the format "JJ/MM/AAAA". This function convert the dates of the format
     * used by the IHM, to the format used by the API. The format used by the IHM, is the format used by the inputs of type date. */
    static toDateFormatAPI(date){
        if(!date)
            return null;

        if(date.length != "YYYY-MM-DD".length)
            throw new Error(`Date incorrectly formatted "${date}"`);

        return  date.substring(8,10) + "/" + date.substring(5,7) + "/" + date.substring(0,4);
    }

    /** Create a timer with the name, and the function given. A timer is a signal than will execute the function
     * after the number of millisecond specified, if the timer is started. */
    static createTimer(name, fct, duration){

        let timer = {
            fct : fct,
            duration : duration,
            end : null
        };

        Util.timers.set(name, timer);
    }

    /** Start the timer with the name given, and execute the function of the timer at the end of it. Each time a timer is 
     * restarted, the previous timers with the same names will not be executed if they were pending.*/
    static async startTimer(timer_name){
        let timer = Util.timers.get(timer_name);
        let now = new Date();
        timer.end = new Date(now.valueOf() + timer.duration);
        Util.timers.set(timer_name, timer);
        
        await Util.sleep(timer.duration);
        let timer_actualized = Util.timers.get(timer_name);

        if(timer_actualized && timer_actualized.end && timer_actualized.end.valueOf() == timer.end.valueOf())
            timer.fct();
    }


    /** This function allow to sleep the number of milliseconds specified. But the function must be called with await 
    * to function correctly.*/
    static async sleep(duration_ms){
        return new Promise(resolve => setTimeout(resolve, duration_ms));
    }


    /** This function return the same text, but in html. Space and enter are converted, and all html characters like
    *  "<" are escaped to be displayed correctly, and for security purposes. */
    static toHtmlEscaped(text){

        if(text == null)
            return null;
        else{
            let answer = text.replaceAll("&", "&amp;");

            answer = answer.replaceAll("<", "&lt;");
            answer = answer.replaceAll(">", "&gt;");
            answer = answer.replaceAll('"', "&quot;");
            answer = answer.replaceAll("'", "&#39;");

            answer = answer.replaceAll("\n", "<br/>");
            return answer;      
        }
    }

}