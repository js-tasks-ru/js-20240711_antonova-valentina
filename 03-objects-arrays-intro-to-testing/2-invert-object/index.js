/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    const MyObj = obj;
    const NewObj = {};

    if (!MyObj) return;

    Object.entries(MyObj).forEach(([key, value]) => {
      NewObj[value] = key
    })

    return NewObj;

}
