function buildQueryParams(obj) {
    const params = new URLSearchParams();
    for (const key in obj) {
      if (obj[key] === null || obj[key] === '' || 
          (Array.isArray(obj[key]) && obj[key].length === 0) || 
          (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)) {
        continue;
      }
      if (typeof obj[key] === 'object') {
        const nestedParams = buildQueryParams(obj[key]);
        if (nestedParams.length > 0) {
          params.set(key, nestedParams);
        }
        continue;
      }
      params.set(key, obj[key]);
    }
    return params.toString();
  }
  
//   const obj = {page:1, name: 'John', age: 30,  hobbies: [1],filter:{search:null,page:null} };
  const obj = {filter:{
    scope_time:null
  } };
const queryParams = buildQueryParams(obj);

console.log(queryParams)