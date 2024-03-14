const url = new URL(
    "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
  );
console.log(url.toJSON())


const {getQuery,withQuery}=require('ufo')

const wt= withQuery('/foo?page=a', { token: 'secret',hujan:{
    page:1,
    offset:2,
    limit:3
} })

const gt=getQuery('https://www.google.com/foo?page=a&token=secret&hujan=%7B%22page%22:1,%22offset%22:2,%22limit%22:3%7D')
console.log(wt)
console.log(gt)



