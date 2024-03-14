const data={
    page:1,
    offset:3,
}


const params=new URLSearchParams(data)

params.append("limit",3);

console.log(params.toString())

const searchParams = new URLSearchParams(data);

// Display the key/value pairs
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
const url=new URL('https://example.com/?name=Jonathan&age=18');
let urlTesting = new URLSearchParams(url.search);
let personName = urlTesting.get("name"); // is the string "Jonathan"
let age = parseInt(urlTesting.get("age"), 0);

console.log(age);
console.log(personName);
console.log(urlTesting.toString())