var Logger = function() {
    this.messages = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const prevStamp = this.messages.get(message) ?? -1;
    if (prevStamp === -1) {
        this.messages.set(message, timestamp + 10);
        return true;
    } else if (timestamp >= prevStamp) {
        this.messages.set(message, timestamp + 10);
        return true;
    } else {
        return false;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
 