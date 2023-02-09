const _ =require("lodash")

const arrayA = [{name: "a"}, {name: "b"}];
const arrayB = [{name: "a"}, {name: "c"}];

const count = _.intersectionWith(arrayA, arrayB, (objA, objB) => {
  return objA.name === objB.name;
}).length;

console.log(count);