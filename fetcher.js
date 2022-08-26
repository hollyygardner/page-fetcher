const url = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error); 
    return;
  }
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
    }
  });
});
