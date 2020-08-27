const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
    .then(function(html){
        //success!
        console.log(html);
    })
    .catch(function(err){
        //handle error
    });