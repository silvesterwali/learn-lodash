const text = 'here is a message with a link to https://www.google.com and another link to https://marked.js.org/';
const changedText = text.replace(
  /(https?:\/\/)([^ ]+)/g,
  '<a target="_blank" href="$&">$2</a>'
);
console.log(changedText);