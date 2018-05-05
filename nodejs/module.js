var fs = require('fs');

// fs.mkdir("temp", error => {
//     if(error) {
//         return false;
//     }

//     console.log('success');
// });

fs.readdir('temp', function(error, files) {
  if (error) {
    return false;
  }

  var returnFiles = [];
  var returnDir = [];

  (function ifFile(i) {
    if (i === files.length) {
      console.log(returnDir);
      console.log(returnFiles);
      return;
    }
    fs.stat('temp/' + files[i], (error) => {
      if (error) {
        return false;
      }
      fs.stat('temp/' + files[i], (error, status) => {
        if (status.isDirectory(files[i])) {
          returnDir.push(files[i]);
        } else {
          returnFiles.push(files[i]);
        }
        ifFile(i + 1);
      });
    });
  })(0);
});
