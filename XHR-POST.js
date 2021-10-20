const http = require("http")

const data = new TextEncoder().encode(
    JSON.stringify({
        account_type: "saving",
        amount: 5008.65
    })
)

const options = {
    hostname: 'localhost',
    port: 8282,
    path: '/2003/account',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    var response = '';
    res.on('data', function(d) {
      response += d;
    });
    res.on('end', function(d) {
      console.log(response);
    });
  })
  
  req.on('error', error => {
    console.error(error)
  })


req.write(data)
req.end()