const https = require('http')
const options = {
  hostname: 'localhost',
  port: 8282,
  path: '/customers',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  var response = '';
  res.on('data', function(d) {
    response += d;
  });
  res.on('end', function(d) {
    let resData = JSON.parse(response);
    //console.log(typeof(resData));
    console.log(resData);
    // now you can do what you need to with it including passing it to the socket
  });
})

req.on('error', error => {
  console.error(error)
})

req.end()

console.log(typeof(resData));
