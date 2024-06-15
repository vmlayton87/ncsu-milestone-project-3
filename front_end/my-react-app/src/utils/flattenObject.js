 // Function to flatten the updatedCharacter object
 export const flattenObject = (obj, result = {}) => {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          flattenObject(obj[key], result);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  };