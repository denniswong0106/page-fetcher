const request = require('request');
const fs = require('fs');


const writeWebpageToFile = (data, filePath) => {
  console.log('writing files now')
  fs.writeFile(`${filePath}`, data, err => {
    if (err) throw err;
    console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
  })
};

/* fs.readFile = if file read can be read, tell ask them if they want
to do it or not */ 




request(process.argv[2], (error, response, body) => {
  console.log('Making http request...');
  writeWebpageToFile(body, process.argv[3]);
});


