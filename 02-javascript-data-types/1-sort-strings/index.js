/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const items = arr; 
    const sort = param;

  const collator = new Intl.Collator('ru',{ caseFirst: "upper" });

    const sorted = [...items].sort((a, b) => {
    if (sort=='desc'){
    
        return collator.compare(b, a);
    }
    return collator.compare(a, b);
 });

  return sorted;

}
