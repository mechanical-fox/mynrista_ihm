
export class Util {


    static timers = new Map();

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


}