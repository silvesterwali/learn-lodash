var ogjs = require('opengraphjs');
// Pass in a URL
ogjs({ url: 'https://swiperjs.com/' })
  .then(function (data) {
    console.table(data); // some share data parsed from metatags..
  }, function (err) {
    console.log('It seems that we have fumbled with an error', err);
  });