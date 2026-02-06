

class MessageUtil {


    static functionList = new Map();
    static variableList = new Map();

    /** Register a function to treat the message specified. The function must take an array
    * of string as argument, and returns nothing. */
    static listen(message, f){
        MessageUtil.functionList.set(message, f);
    }

    /** Send a message with the arguments given, and treat it with the function registered. The arguments given must
     * be given as an array of string. */
    static call(message, args) {
        const functionRegistered = MessageUtil.functionList.get(message);

        if (functionRegistered) 
            functionRegistered(args);
        else 
            console.warn(`Function ${message} called, but none was registered`);
    }

    /** Register a variable with the value given */
    static setVar(name, value){
        this.variableList.set(name, value);
    }

    /** Return the value for the variable asked  */
    static getVar(name){
        return this.variableList.get(name);
    }
}