const _ = require("lodash");

function reduceObject(obj) {
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (_.isObject(value) && _.isEmpty(value)) {
        delete obj[key];
      } else if (_.isObject(value)) {
        reduceObject(value);
      }
    });
    return obj;
  }
  
  var obj = {
      page: 1,
      filter: {
          search: null,
      }
  };
  
  console.log(reduceObject(obj));
  
  
  
  
