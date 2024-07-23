/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

    var NewStr = "";

    var str = "";

    for (var i = 0; i < string.length ; i++) {

        str = string[i] +  (string[i] === str[0] ? str : '')
       
        if (str.length > size) continue
        NewStr += string[i]
    }

    return NewStr;
 

}
