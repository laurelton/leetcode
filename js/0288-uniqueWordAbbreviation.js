/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dict = new Map();
    for (const word of dictionary) {
        const abbr = this.getAbbr(word);
        
        if (this.dict.get(abbr) && this.dict.get(abbr) !== word) {
            this.dict.set(abbr, ' ');
        } else {
            this.dict.set(abbr, word)
        }
    }
};

/**
 * @param {string} word
 * @return {string}
 */
ValidWordAbbr.prototype.getAbbr = function(word) {
    return word.length < 3 
            ? word 
            : word[0] + (word.length - 2).toString(10) + word[word.length - 1];
}

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);
    const value = this.dict.get(abbr);
    return value === undefined || value === word;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
