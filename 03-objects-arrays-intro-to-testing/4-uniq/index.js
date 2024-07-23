/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {

    var MyArr = arr;

    let uniqueItems = [...new Set(MyArr)];

  return uniqueItems;
}
