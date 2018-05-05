console.log('index1.js');

const $ = require('jquery');
$.each([1, 2, 3], (item) => {
  console.log(item);
});

$.ajax({
  url: 'http://localhost:9000/bannerUrl',
  type: 'GET',
  jsonp: 'callback',
  dataType: 'jsonp',
  success: data => {
    console.log(data);
  },
  error: error => {
    console.log(error);
  }
});

// $.getJSON("http://localhost:9000/bannerUrl?callback=?", function(data) {
//   console.log("result data:" + data.name);
// });
