/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

 const mypick = {};
  for (const field of fields) {
   
    mypick[field] = obj[field];

  }
  return mypick;

//  const map = Object.fromEntries(Object.entries(mypick).map(([key, value]) => [key, value]) 

};
