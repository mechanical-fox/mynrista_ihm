

class MessageUtil {


    static functionList = new Map();

    /** Register a function to treat the message specified.
    * 
    *  @param {string} message The message to receive to use the function f
    *  @param {string[]=>void} f A function to execute, when receiving the message matching 
    * */
    static listen(message, f){
        MessageUtil.functionList.set(message, f);
    }

    /** Send a message with the arguments given, and treat it with the function registered. If the message
    * is matching with no function, a warning will be send.
    * 
    * @param {string} message A message to send
    * @param {string[]} args A list of arguments to treat
    */
    static call(message, args) {
        const functionRegistered = MessageUtil.functionList.get(message);

        if (functionRegistered) 
            functionRegistered(args);
        else 
            console.warn(`Function ${message} called, but none was registered`);
    }
}