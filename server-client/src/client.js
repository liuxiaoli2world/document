import $ from 'jquery';

(function ($) {
  $.ajax({
    url: 'http://localhost',
    type: 'GET',
    dataType: 'json',
    success: data => {
      console.log(data);
    },
    error: error => {
      console.log(error);
    }
  });
})($);
